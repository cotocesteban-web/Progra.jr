const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        res.status(200).json({ mensaje: "lista de todos los cursos" })
    } catch (error) {
        res.status(500).json({ errors: error.message })
    }
})


router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ mensaje: `detalles de los cursos con id: ${id}` })
})


router.post('/crear', async (req, res) => {
    try {
        res.status(200).json({ mensaje: "Curso creado exitosamente" })
    } catch (error) {
        res.status(500).json({ errors: error.message })
    }
})

module.exports = router


/// ia
const express = require("express")
const app = express()

// Importar los enrutadores
const rutasUsuarios = require("./routes/usuarios")
const rutasProductos = require("./routes/productos")
const rutasCursos = require("./routes/cursos") // <-- 1. Importar rutas de cursos

// Middleware para entender JSON en el Body (¡Obligatorio para que funcione el ejercicio!)
app.use(express.json())

// Conectar rutas a sus prefijos
app.use("/usuarios", rutasUsuarios)
app.use("/productos", rutasProductos)
app.use("/cursos", rutasCursos) // <-- 2. Conectar bajo el prefijo /cursos

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3000")
})