// Importar express y express.router
const express = require('express');
const router = express.Router();

// La Ruta POST que recibirá los datos del formulario
router.post('/procesar', async (req, res) => {
    try {
        // 1. Captura de Datos: Extraemos nombre y apellido del cuerpo de la petición (req.body)
        const { nombre, apellido } = req.body;

        // Validamos rápidamente que no vengan vacíos los campos
        if (!nombre || !apellido) {
            return res.status(400).send('<h1>Por favor, completa todos los campos del formulario.</h1>');
        }

        // El Consumo Concurrente/Consecutivo de Proveedores Externos
        // API de Actividades Aleatorias
        const respuestaActividad = await fetch('https://bored-api.appbrewery.com/random');
        const datosActividad = await respuestaActividad.json();
        
        // Extracción de Datos Preciso (Notación de punto)
        const actividadTexto = datosActividad.activity; 

        // API de Imágenes de Perros
        const respuestaImagen = await fetch('https://dog.ceo/api/breeds/image/random');
        const datosImagen = await respuestaImagen.json();
        const urlImagen = datosImagen.message;

        const htmlRespuesta = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Resultado del Generador</title>
                <style>
                    body {
                        font-family: sans-serif;
                        background-color: #9e9292ff;
                        margin: 40px;
                    }
                    .tarjeta {
                        border: 3px solid #000000; 
                        margin: 0 auto;
                        max-width: 400px;
                        text-align: center;
                        border-radius: 5px;
                    }
                    .saludo {
                        font-size: 20px;
                        margin-bottom: 15px;
                        color: #000000;
                        border-radius: 4px;
                    }
                    .actividad {
                        background-color: #3061abff; 
                        color: #000000;
                        padding: 12px;
                        font-weight: bold;
                        border: 3px solid #000000;
                        margin-bottom: 20px;
                    }
                    .foto-perro {
                        width: 100%;
                        height: auto;
                        max-height: 300px;
                        border: 2px solid #000000; 
                        display: block;
                        margin: 0 auto;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>

                <div class="tarjeta">
                    <div class="saludo">¡Hola, <strong>${nombre} ${apellido}</strong>!</div>
                    <div class="actividad">"${actividadTexto}"</div>
                    <img class="foto-perro" src="${urlImagen}" alt="Imagen de perrito">
                </div>

            </body>
            </html>
        `;

        // Esto sirve para enviar el HTML renderizado directamente al navegador
        res.send(htmlRespuesta);

    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).send('<h1>Error al consultar los datos.</h1>');
    }
});

// Exportamos el enrutador para que app.js pueda usarlo
module.exports = router;


