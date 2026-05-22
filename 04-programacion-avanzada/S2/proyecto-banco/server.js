const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Leer datos de los formularios
app.use(express.urlencoded({ extended: true }));

// Indicarle a Express que busque los archivos HTML y CSS en la carpeta "public" que creaste
app.use(express.static(path.join(__dirname, 'public')));

app.post('/evaluar-credito', (req, res) => {
    const nombre = req.body.nombre;
    const ingreso = parseFloat(req.body.ingreso);
    const monto = parseFloat(req.body.monto);

    const porcentaje = (monto / ingreso) * 100;

    console.log('====================================');
    console.log(`Solicitante: ${nombre}`);
    console.log(`Porcentaje respecto al salario: ${porcentaje.toFixed(2)}%`);
    console.log('====================================\n');

    // Envía el archivo aprobado.html que está dentro de tu carpeta public
    res.sendFile(path.join(__dirname, 'public', 'aprobado.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});