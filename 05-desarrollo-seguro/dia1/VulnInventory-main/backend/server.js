const express = require('express');
const path = require('path');
const routes = require('./routes');
const jwt = require('jsonwebtoken');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser (Lectura de formularios y JSON)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint de LOGIN Seguro (Generador del token)
app.post('/login', (req, res) => {
    const user = { id: 1, role: 'admin' }; // Simulación de usuario
    
    const token = jwt.sign(
        { id: user.id, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );
    
    res.json({ token });
});

// Middleware (El portero)
const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Formato: Bearer <token>
    
    if (!token) return res.status(403).send('No hay token, acceso denegado');
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next(); 
    } catch (err) {
        res.status(401).send('¡Token inválido o manipulado!');
    }
};

// API Routes originales del laboratorio (Accesibles bajo /api/...)
app.use('/api', routes);

// Ruta protegida de prueba (Colocada ANTES del comodín)
app.get('/datos-secretos', auth, (req, res) => {
    res.send(`Bienvenido, tu ID es ${req.user.id} y tu rol es ${req.user.role}`);
});

// Servir los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// El Fallback '*' SIEMPRE debe ir al final de todas tus rutas de texto

require('dotenv').config();

const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.use('/api', routes);

// Fallback to index.html for SPAs (if client-side routing is used)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// INICIALIZACIÓN ÚNICA DEL SERVIDOR
// Primero verificamos/inicializamos la base de datos, luego encendemos el puerto

// Start server after verifying / initializing the database schema
db.initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`===========================================================`);
      console.log(`[VULN-INVENTORY] Servidor corriendo en puerto ${PORT}`);
      console.log(`Accede a la aplicación en: http://localhost:${PORT}`);
      console.log(`ADVERTENCIA: Este proyecto contiene vulnerabilidades criticas!`);
      console.log(`Disenado exclusivamente con fines didacticos y academicos.`);
      console.log(`===========================================================`);
    });
  })
  .catch((err) => {
    console.error('Error al inicializar la base de datos, el servidor no se pudo iniciar:', err.message);
    process.exit(1);

  });
  

