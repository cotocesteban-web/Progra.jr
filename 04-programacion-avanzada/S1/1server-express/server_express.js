const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post("/usuario", (req, res) => {
    console.log(req.body);
    // res.send("Usuario recibido");
    res.json({ mensaje: "Usuario recibido", datos: req.body });
})

app.listen(port, () => { console.log(`Servidor escuchando en http://localhost:${port}`) });