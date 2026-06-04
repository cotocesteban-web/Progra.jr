exports.obtenerTodos = (req, res) => {
    Usuario.obtenerTodos((err, filas) => {
        if (err)
            return res.status(500).send("Error al obtener usuario ");
        res.json(filas);
    });
};

exports.obtenerPorId = (req, res) => {
    const id = req.params.id; // Corregido: params con 's'
    Usuario.obtenerPorId(id, (err, filas) => { // Corregido: Nombre del objeto y método
        if (err)
            return res.status(500).send("Error al obtener usuario ");
        if (filas.length === 0)
            return res.status(404).send("Usuario no encontrado");
        res.json(filas[0]);
    });
};

exports.crear = (req, res) => {
    const error = validarNuevoUpdate(req.body); // Corregido: req.body con punto
    if (error) // Corregido: nombre de la variable de error
        return res.status(400).send(error);

    Usuario.crear(req.body, (err, resultado) => { // Corregido: req.body en vez de res.body
        if (err)
            return res.status(500).send("Error al crear un Usuario"); // Agregado return para que no continue si falla

        res.status(201).send("Usuario creado con Id: " + resultado.insertId); // Corregido: concatenación limpia
    });
};

exports.actualizar = (req, res) => {
    const id = req.params.id;
    const datosNuevos = req.body;

    // Si tienes una función para validar, la puedes usar aquí también
    const error = validarNuevoUpdate(datosNuevos);
    if (error) 
        return res.status(400).send(error);

    Usuario.actualizar(id, datosNuevos, (err, resultado) => {
        if (err)
            return res.status(500).send("Error al actualizar el Usuario");
        
        res.send("Usuario actualizado con éxito");
    });
};

exports.eliminar = (req, res) => {
    const id = req.params.id;

    Usuario.eliminar(id, (err, resultado) => {
        if (err)
            return res.status(500).send("Error al eliminar el Usuario");
        
        // Si el id no existía en la base de datos
        if (resultado.affectedRows === 0)
            return res.status(404).send("Usuario no encontrado");

        res.send("Usuario eliminado con exito");
    });
};