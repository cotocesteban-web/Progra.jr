const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post("/usuario", (req, res) => {
    console.log(req.body);
    // res.send("Usuario recibido");
    res.json({ mensaje: "Usuario recibido", datos: req.body });
})

app.post("/registro", (req, res) => {
    const { nombre, email, password } = req.body;
    console.log(`Nombre: ${nombre}, Email: ${email}, Password: ${password}`);
    // res.json({ mensaje: "Registro exitoso", datos: req.body });
    res.send("<h1>Registro exitoso</h1>" )
    // res.send("<p>Gracias por registrarte, " + nombre + "!</p>"); NO SE PUEDE HACER DOS ENVIOS
});

app.listen(port, () => { console.log(`Servidor escuchando en http://localhost:${port}`) });

