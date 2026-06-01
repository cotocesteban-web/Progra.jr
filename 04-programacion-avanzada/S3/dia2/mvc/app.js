const express = require("express");
const app = express(); // Asegúrate de tener esta línea arriba para inicializar app

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Corregido: urlencoded y extended

// montaje de rutas
const usuariosRouter = require("./routes/usuarios");
app.use("/usuarios", usuariosRouter);

// ruta base
app.get("/", (req, res) => {
    res.send("<h1>Servidor MVC funcionando</h1>"); // Corregido: cierre de etiqueta </h1>
});

// Ruta 404 - No encontrada
app.use((req, res) => {
    res.status(404).send("Ruta no encontrada"); // Corregido: uso de llaves {} en vez de corchetes []
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000"); // Nota: es http, no https
});


// probar con postman
