const recursoInput = process.argv[2];
const pesoInput = Number(process.argv[3]);

// Manejar el caso en que el usuario no pase los argumentos necesarios
if (!recursoInput || !pesoInput) {
    console.log("Error: se debes ingresar en la terminal.");
    console.log("Ejemplo: node cliente.js Oxigeno 350");
    process.exit(1); 
}

// Función de preparación con Callback usando función de flecha
const prepararPaquete = (nombre, peso, callback) => {
    console.log(`1. Empacando ${nombre}...`);
    console.log("2. Enviando datos al servidor central...");
    
    // Ejecutamos el callback que hará la petición de red
    callback(nombre, peso);
};

// Llamamos a la función y le pasamos la logica de envío como Callback
prepararPaquete(recursoInput, pesoInput, (nombre, peso) => {
    
    // Estructura del objeto JSON que se envía al servidor
    const datosEnvio = {
        recurso: nombre,
        peso: peso
    };

    // Enviamos los datos al servidor en el puerto 4000
    fetch('http://localhost:4000/despacho', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosEnvio)
    })
    .then(async (res) => {
        const data = await res.json();
        console.log("Respuesta del Servidor:", data);
    })
    .catch((error) => {
        console.error("Error al conectar con el servidor:", error.message);
    });
});