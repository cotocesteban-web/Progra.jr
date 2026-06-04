// 1. Importamos la librería Express...
const express = require('express');
const app = express();

app.use(express.json());


// ==== Ejercicio 3 ====
function procesarEstudiantes(lista, callback) {
    // Validamos si la lista no existe o no es un arreglo válido
    if (!lista || !Array.isArray(lista) || lista.length === 0) {
        
        return callback("La lista de estudiantes eta vacia", null);
    }

    // Estructuras para clasificar los grupos
    let aprobados = [];
    let reprobados = [];

    // Recorremos la lista para clasificar según la nota (>= 70 aprueba)
    lista.forEach(estudiante => {
        if (estudiante.nota >= 70) {
            aprobados.push(estudiante.nombre);
        } else {
            reprobados.push(estudiante.nombre);
        }
    });

    // Creamos el reporte final
    let reporte = {
        aprobados: aprobados,
        reprobados: reprobados,
        total: lista.length
    };

    // Al tener éxito, el error es null y pasamos el reporte como segundo parámetro
    callback(null, reporte);
}

// 2. Definimos el puerto..
const PORT = 3000;

// Siguiente paso: El saludo (Responde con HTML)
app.get('/hola', (req, res) => {
    res.send("<h1>¡Hola Estudiantes!</h1><p>El servidor respondió con éxito.</p>");
});

// Devolviendo Datos Reales (Responde con JSON)
app.get('/contacto', (req, res) => {
    res.json({
        nombre: "Soporte Técnico",
        email: "ayuda@irsi.com",
        extension: 2205
    });
});

// ============== Ejercicio 2 ============
// Ruta de Registro (POST)
app.post('/registrar', (req, res) => {
    // Capturamos el cuerpo de la petición
    const infoEstudiante = req.body;
    
    // Mostramos los datos en la terminal de VS Code
    console.log("Datos recibidos:", infoEstudiante);
    
    // Respondemos con Status 201 y un JSON de confirmación
    res.status(201).json({
        mensaje: "Estudiante registrado con éxito",
        datos_recibidos: infoEstudiante
    });
});

// analizar/clase
app.post('/analizar-clase', (req, res) => {
    const listaEstudiantes = req.body.estudiantes;

    // Llamamos al motor de calificaciones pasandole la lista y el callback
    procesarEstudiantes(listaEstudiantes, (error, reporte) => {
        // Si el motor devuelve error
        if (error) {
            return res.status(400).json({
                status: "error",
                mensaje: error
            });
        }

        // si todo sale bien salida esperada reporte
        res.json({
            status: "success",
            reporte: reporte
        });
    });
});

// 3. Encendemos el servidor
app.listen(PORT, () => {
    console.log("Servidor activo en el puerto " + PORT);
});


