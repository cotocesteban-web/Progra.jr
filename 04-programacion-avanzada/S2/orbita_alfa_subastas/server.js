const express = require('express');
const path = require('path'); 
const db = require('./db'); 
const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

app.post('/subasta', async (req, res) => {
    const { idLote, comerciante, oferta } = req.body;

    try {
        const [resultadoLote, resultadoComerciante] = await Promise.all([
            db.query('SELECT * FROM lotes WHERE id = ?', [idLote]),
            db.query('SELECT * FROM comerciantes WHERE nombre = ?', [comerciante])
        ]);

        const lote = resultadoLote[0][0]; 
        const cliente = resultadoComerciante[0][0];

        if (!lote || !cliente) {
            return res.send('<h1>Error</h1><p>El lote o el comerciante no existen.</p><a href="/">Regresar</a>');
        }

        const montoOferta = parseInt(oferta);

        if (montoOferta <= lote.puja_actual || montoOferta > cliente.saldo) {
            return res.send('<h1>Oferta Vacía o Inválida</h1><p>Tu oferta debe ser mayor a la actual y no superar tu saldo disponible.</p><a href="/">Regresar</a>');
        }

        await Promise.all([
            db.query('UPDATE lotes SET puja_actual = ?, comerciante_lider = ? WHERE id = ?', [montoOferta, comerciante, idLote]),
            db.query('UPDATE comerciantes SET saldo = saldo - ? WHERE nombre = ?', [montoOferta, comerciante])
        ]);

        res.send('<h1>¡Puja registrada con éxito!</h1><a href="/consultar">Ver Monitor de Subastas</a>');

    } catch (error) {
        console.error(error);
        res.send('Ocurrió un error interno en el servidor.');
    }
});

app.get('/consultar', async (req, res) => {
    try {
        const [resultadoLotes, resultadoComerciantes] = await Promise.all([
            db.query('SELECT * FROM lotes'),
            db.query('SELECT * FROM comerciantes')
        ]);

        const lotes = resultadoLotes[0];
        const comerciantes = resultadoComerciantes[0];

        const htmlResponse = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Estado del Mercado</title>
                <style>
                    body {
                        font-family: sans-serif;
                        background-color: #f4f7f6;
                        margin: 0;
                        padding: 20px;
                    }

                    .card-reporte-ancho {
                        background-color: #ffffff;
                        border: 2px solid #000000;
                        padding: 25px;
                        max-width: 1000px;
                        width: 100%;
                        margin: 0;
                        box-sizing: border-box;
                    }

                    .columna-tabla {
                        display: inline-block;
                        width: 47%;
                        margin-right: 2%;
                        vertical-align: top;
                        box-sizing: border-box;
                    }

                    h2 {
                        color: #2c3e50;
                        font-size: 18px;
                        border-bottom: 2px solid #2c3e50;
                        padding-bottom: 5px;
                        margin-top: 0;
                        margin-bottom: 15px;
                    }

                    .tabla-datos {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }

                    .tabla-datos th, .tabla-datos td {
                        border: 1px solid #bdc3c7;
                        padding: 12px 10px;
                        text-align: left;
                    }

                    .tabla-datos th {
                        background-color: #2c3e50;
                        color: white;
                    }

                    .limpiador {
                        clear: both;
                        display: block;
                        height: 1px;
                    }

                    .btn-regresar {
                        display: block;
                        width: 180px;
                        margin: 20px 0 0 0;
                        padding: 10px;
                        background-color: #2c3e50;
                        color: white;
                        text-align: center;
                        text-decoration: none;
                        font-weight: bold;
                        border-radius: 4px;
                    }
                </style>
            </head>
            <body>
                <main class="card card-reporte-ancho">
                    
                    <div class="columna-tabla">
                        <h2>Estado Actual de Subastas (Lotes)</h2>
                        <table class="tabla-datos">
                            <thead>
                                <tr>
                                    <th>ID Lote</th>
                                    <th>Descripción</th>
                                    <th>Puja Más Alta</th>
                                    <th>Comerciante Líder</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${lotes.map(l => `
                                    <tr>
                                        <td>${l.id}</td>
                                        <td>${l.descripcion || l.nombre || 'Sin descripción'}</td>
                                        <td>${l.puja_actual} créditos</td>
                                        <td>${l.comerciante_lider || 'Sin ofertas'}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="columna-tabla">
                        <h2>Tabla de Comerciantes</h2>
                        <table class="tabla-datos">
                            <thead>
                                <tr>
                                    <th>Nombre Único</th>
                                    <th>Saldo en Créditos Estelares</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${comerciantes.map(c => `
                                    <tr>
                                        <td>${c.nombre}</td>
                                        <td>${c.saldo} créditos</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="limpiador"></div>

                    <a href="/" class="btn-regresar">Volver al Formulario</a>
                </main>
            </body>
            </html>
        `;

        res.send(htmlResponse);

    } catch (error) {
        console.error(error);
        res.send('Error al generar el reporte de subastas.');
    }
});

app.listen(2000, () => console.log("Servidor encendido en el puerto 2000"));