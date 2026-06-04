const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        res.status(200).json({ mensaje: "lista de todos los cursos" })
    } catch (error) {
        res.status(500).json({ errors: error.message })
    }
})

router.post('/crear', async (req, res) => {
    try {
        const cursoCrear = req.body
        res.status(201).json({ mensaje: "Curso creado exitosamente" })
    } catch (error) {
        res.status(500).json({ errors: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ mensaje: `detalles de los cur con ID: ${id}` })
})

module.exports = router


///// ia
const express = require("express")
const router = express.Router()

// GET -> mostrar todos los cursos disponibles
// localhost:3000/cursos
router.get("/", async (req, res) => {
    try {
        res.status(200).json({ 
            mensaje: "mostrar todos los cursos disponibles" 
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// POST -> /crear (recibiendo info del curso en el body)
// localhost:3000/cursos/crear
router.post("/crear", async (req, res) => {
    try {
        // Capturamos la información que viene desde el body de Postman
        const cursoInfo = req.body
        
        res.status(201).json({ 
            mensaje: "curso creado exitosamente",
            cursoGuardado: cursoInfo // Devolvemos la info recibida para confirmar
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// PUT -> actualizar informacion usando :id
// localhost:3000/cursos/4
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const nuevaInfo = req.body // Info nueva para actualizar el curso

        res.status(200).json({ 
            mensaje: `el curso ID ${id} se actualizó con la info nueva`,
            datosActualizados: nuevaInfo
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router