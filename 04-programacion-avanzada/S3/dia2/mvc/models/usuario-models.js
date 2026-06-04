const mysql = require({"mysql2"})
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3307",
    password: "sql-123",
    database: "usuarios"

})

conexion.connect((err) => {
    if (err)
        console.log("Error al conoctar coon my sql", err.message)
    else 
        console.log("Conexion a mysql desde el modelo")

})

const Usuario = {
    obteneTodos: (callback) => {
        const sql = "SELECT * fROM usuarios"
        conexion.query(sql, callback)
    },
    obtenerPorId: (id, callback) => {
        const sql = "SELECT * FROM usuarios WHERE id = ?"
        conexion.query(sql, [id], callback)
 },
    crear: (datos, callback) => {
        const sql = "INSERT INTO usuarios (nombre, edad, altura, correo, empresa_id, foto_url) VALUES (?, ?, ?, ?, ?, ?)";
        const valores = [
            datos.nombre,
            datos.edad,
            datos.altura,
            datos.correo,
            datos.empresa_id,
            datos.foto_url
        ];
        conexion.query(sql, valores, callback);
    },

   actualizar: (id, datos, callback) => {
        const sql = `UPDATE usuarios
                     SET nombre=?, edad=?, altura=?, correo=?, empresa_id=?, foto_url=?
                     WHERE id=?`;            
        const valores = [
            datos.nombre,
            datos.edad,
            datos.altura,
            datos.correo,
            datos.empresa_id,
            datos.foto_url,
            id 
        ];

        conexion.query(sql, valores, callback);
    },
    eliminar: (id, callback) => {
        const sql = "DELETE FROM usuarios WHERE id = ?";
        conexion.query(sql, [id], callback);
    }
    } 



