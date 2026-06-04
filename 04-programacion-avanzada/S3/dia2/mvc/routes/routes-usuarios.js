const express = require("express")
const router = express.Router()
const controller = require("../controllers/usuarioscontrollers")

// get usuarios obtienene todos los usuarios
router.get("/", controller.obtenerTodos)

// get / usuarios/:id obtiene unn usuario
router.get("/:id", controller.obtenerPorId)

// post /productos Crea nuevo usuario
router.post("/", controller.crear)

// PUT /usuarios/:id - Actualizar un usuario existente
router.put("/:id", controller.actualizar)

// DELETE /usuarios/:id - Eliminar un usuario por su ID
router.delete("/:id", controller.eliminar)

module.exports = router
