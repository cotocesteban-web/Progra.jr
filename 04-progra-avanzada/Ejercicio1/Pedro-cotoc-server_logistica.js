const express = require('express');
const app = express();

// Se asigna el puerto 4000
const PORT = 4000;

app.use(express.json());

// Ruta POST /despacho
app.post('/despacho', (req, res) => {
    const { recurso, peso } = req.body;

    // Simulador verificación en el hangar con retraso de 1.5 segundos
    setTimeout(() => {
        // Regla de negocio: si el peso es mayor a 500kg
        if (peso > 500) {
            console.log(` Recibido pedido de ${recurso} (${peso}kg). Estado: RECHAZADO.`);
            return res.status(400).json({
                status: "error",
                mensaje: "Capacidad de hangar excedida"
            });
        }

        // Si el peso es menor o igual a 500kg, se acepta
        console.log(`[Log] Recibido pedido de ${recurso} (${peso}kg). Estado: ACEPTADO.`);
        res.json({
            mensaje: "Despacho programado",
            id: "A-102"
        });
// Se le aigna los el tiempo 1500 milisegundos = 1.5 segundos
    }, 1500); 
});

app.listen(PORT, () => {
    console.log("Servidor de Logística activo en el puerto " + PORT);
});


