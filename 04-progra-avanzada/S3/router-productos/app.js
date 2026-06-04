const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        res.status(200).json({ mensaje: "lista de todos los Productos" })
    } catch (error) {
        res.status(500).json({ errors: error.message })
    }
})


router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ mensaje: `detalles del Producto con ID: ${id}` })
})


router.post('/agregar', async (req, res) => {
    try {
        res.status(200).json({ mensaje: "Producto agregado exitosamente" })
    } catch (error) {
        res.status(500).json({ errors: error.message })
    }
})

module.exports = router

