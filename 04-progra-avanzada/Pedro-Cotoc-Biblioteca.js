// 1. Base de Datos: Arreglo de objetos llamado libros con las propiedades id, titulo y disponible (booleano).
const libros = [
    { id: 1, titulo: "La llorona", disponible: true },
    { id: 2, titulo: "El Cadejo", disponible: false },
    { id: 3, titulo: "El Sombreron", disponible: true },
    { id: 4, titulo: "La siguanaba", disponible: false },
    { id: 5, titulo: "El Ginete sin cabeza", disponible: true }
];

// 2. Función Asíncrona `obtenerLibrosServidor(callback):`
function obtenerLibrosServidor(callback) {
    console.log("Proceso de conexion al servidor.");

    setTimeout(() => {
        // Simulador probabilidad de fallo del 20%
        const fallo = Math.random() < 0.20;

        if (fallo) {
            callback("Error!! No se pudo establecer conexión con el servidor.");
        } else {
            // El primer argumento es null porque no hay error
            callback(null, libros);
        }
    }, 2000);
}

// Función de Filtrado `filtrarDisponibles(lista, criterio):.
function filtrarDisponibles(lista, criterio) {
    const librosFiltrados = [];
    //utilizar el método `forEach` para recorrer los libros.
    lista.forEach((libro) => {
        // Aplicamos el callback 'criterio' para decidir si se incluye
        if (criterio(libro)) {
            librosFiltrados.push(libro);
        }
    });

    return librosFiltrados;
}

// 4. Ejecución Principal
obtenerLibrosServidor((err, datos) => {
    // Manejo de Error
    if (err) {
        console.error("Ocurrió un problema:", err);
        return;
    }

    console.log("Datos recibidos con éxito. Procesando...");

    // Filtrar libros disponibles
    const disponibles = filtrarDisponibles(datos, (libro) => libro.disponible === true);

    // Reportar resultados uno por uno
    console.log("--- Libros Disponibles ---");
    disponibles.forEach(libro => {
        console.log(`- Titulo: ${libro.titulo}`);
    });
});