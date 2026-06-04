const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const conexion = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'sql-123',
    database: 'ecoeventos_db'
});

conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado exitosamente a ecoeventos_db');
});


app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/confirmar', (req, res) => {
    const nombreAsistente = req.body.nombre;
    const correoAsistente = req.body.correo;
    
    const consultaInsertar = 'INSERT INTO asistentes (nombre, correo) VALUES (?, ?)';
    
    conexion.query(consultaInsertar, [nombreAsistente, correoAsistente], (error, _) => {
        if (error) {
            return res.send('Hubo un error al registrar su asistencia.');
        }
        res.send('<h1>¡Gracias por registrarte en EcoEventos!</h1><p>Tu asistencia ha sido guardada.</p><a href="/">Volver</a>');
    });
});

app.get('/asistencias', (req, res) => {
    const consultaSeleccionar = 'SELECT * FROM asistentes';
    
    conexion.query(consultaSeleccionar, (error, filas) => {
        if (error) {
            return res.send('Error al consultar la lista.');
        }
        
      
        let filasTabla = '';
        filas.forEach((asistente) => {
            filasTabla += `
                <tr>
                    <td>${asistente.id}</td>
                    <td>${asistente.nombre}</td>
                    <td>${asistente.correo}</td>
                </tr>
            `;
        });

        
        const htmlRespuesta = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Lista de Asistencias</title>
            <link rel="stylesheet" href="/css/estilos.css">
        </head>
        <body>
            <div class="contenedor">
                <h2>Administración - Lista de Asistentes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre Completo</th>
                            <th>Correo Electrónico</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filasTabla}
                    </tbody>
                </table>
                <br>
                <a href="/" class="btn-enlace">Volver al Registro</a>
            </div>
        </body>
        </html>
        `;
        
        res.send(htmlRespuesta);
    });
});


app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});