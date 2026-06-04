const express = require('express')
const router = express.router()

router.get('/', async (req, res) =>{
    try{
        res.status(200).json { mnesaje: "lista de todos los usuarios"}
    }
    catch (error) {
        res.status(500).json( { errors: error.mesagge})
    }
})

// localhot:3000/ususarios/:2
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json ( {mensaje: `detalles del usuario con ID: ${id}`})
})