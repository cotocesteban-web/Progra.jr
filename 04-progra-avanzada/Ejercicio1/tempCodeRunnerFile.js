// Importar express e inicializar la app:
const express = require(`express`)
const app = express();

// Definir puerto
const PORT = 3000;

app.get(`/hola`, (req, res) => {
    req.send("<h1>¡Hola Estudiantes!</h1><p>El servidor respond ")
});

app.listen(PORT, () => {
    console.log("Servidor activo en el puerto " + PORT);
});  

