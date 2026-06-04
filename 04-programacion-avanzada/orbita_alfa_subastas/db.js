const mysql = require(`mysql2/promise`);

///esta es la configuracion de conexiones o pool;
// crate pol es para multip[l;es conexoiones y consultas en paralelo.]
const pool = mysql.createPool({
host: `localhost`,
port: 3307,
user: `root`,
password: `sql-123`,
database: `orbita_alfa`,
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0

});
/// exportamos pool.
module.exports = pool;