const express = require('express');
const app = express();
require('dotenv').config(); 

// Esto permite que Express entienda los datos de los formularios HTML
app.use(express.urlencoded({ extended: true })); 

// Esto le dice a Express dónde buscar tu index.html
app.use(express.static('public')); 

// Importamos tu archivo de rutas
const actividadesRoutes = require('./src/routes/actividades');

// Conectamos las rutas bajo el prefijo "/actividades"
app.use('/actividades', actividadesRoutes);


//Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo con éxito en el puerto http://localhost:${PORT}`);
});