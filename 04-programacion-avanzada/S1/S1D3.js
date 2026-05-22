// function modify(array, callback) {
//     console.log('Modificando el array...');
//     // hacemos algo
//     array.push(4);
//     // avisamos que ya se hizo algo
//     callback();
// }

// const myArray = [1, 2, 3];

// modify(myArray, function() {
//     console.log('El array ha sido modificado:', myArray);
// });


// Pasar datos al callback

// function modifyAndReport(array, callback) {
//     console.log('Modificando el array...');
//     array.push("Pérez");
//     callback(array, array.length);
// }

// const apellido = ['García', 'López', 'Martínez'];

// modifyAndReport(apellido, (modifiedArray, newLength) => {
//     console.log('El array ha sido modificado:', modifiedArray);
//     console.log('La nueva longitud del array es:', newLength);
// } );

// function(modifiedArray, newLength) {
//     console.log('El array ha sido modificado:', modifiedArray);
//     console.log('La nueva longitud del array es:', newLength);
// }

// forEach

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach( number => {
//     console.log('Número:', number);
// } );

// const names = ['Alice', 'Bob', 'Charlie'];

// names.forEach( (nombre, index, array) => {
//     console.log(`Nombre: ${nombre}, Índice: ${index}, Array completo: ${array}, longitud del array: ${array.length}`);
// }) 

// const names = ['Alice', 'Bob', 'Charlie'];

// names.forEach( (nombre, index) => {
//     console.log(`Nombre: ${nombre}, Índice: ${index}`);
// }) 


// const data = [4 , 9, 16];
// let suma = 0;

// data.forEach( number => {
//     suma += number;
// })
// console.log('Suma total:', suma);



// function operar(num1, num2, callback) {
//     return callback(num1, num2);
// }

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const multiplicacion = (a, b) => a * b;
// const division = (a, b) => a / b;

// console.log("suma: ", operar(10, 5, suma));
// console.log("resta: ", operar(10, 5, resta));
// console.log("multiplicación: ", operar(10, 5, multiplicacion));
// console.log("división: ", operar(10, 5, division));



// - Implemente `filtrarArreglo(arr, criterio)` que devuelva un **nuevo** arreglo con los elementos que cumplan `criterio(x)`.  
// - Pruebe con criterios: `esPar`, `mayorQue(10)`, `multiploDe(3)`.

// function filtrarArreglo(arr, criterio) {
//     let resultado = [];
//     arr.forEach ( elemento => {
//         if (criterio(elemento)) {
//             resultado.push(elemento);
//         }
//     })
//     return resultado;
// }

// const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const esPar = num => num % 2 === 0;
// const mayorQue = num => num > 10;
// const multiploDe = num => num % 3 === 0;

// console.log("Números pares:", filtrarArreglo(datos, esPar));
// console.log("Números mayores que 10:", filtrarArreglo(datos, mayorQue));
// console.log("Múltiplos de 3:", filtrarArreglo(datos, multiploDe));


// console.log("Inicio")
// setTimeout( () => {
//     console.log("Esto se muestra después de 2 segundos")
// }, 2000);
// console.log("Fin")



function modifyAsync(array, callback) {
    console.log('1. Iniciando modificación asíncrona...');
    setTimeout( () => {
        array.push("Pérez");
        console.log('2. Modificación asíncrona completada.');
        callback(array, array.length);
    }, 2000);
}

const apellidos = ['García', 'López', 'Martínez'];
modifyAsync(apellidos, (modifiedArray, newLength) => {
    console.log('3. El array ha sido modificado:', modifiedArray);
    console.log('4. La nueva longitud del array es:', newLength);
} );

console.log("5. Fin del programa");


// 1. Base de Datos (Arreglo de objetos)
const libros = [
    { id: 1, titulo: "Cien años de soledad", disponible: true },
    { id: 2, titulo: "1984", disponible: false },
    { id: 3, titulo: "El Principito", disponible: true },
    { id: 4, titulo: "Don Quijote de la Mancha", disponible: false },
    { id: 5, titulo: "Rayuela", disponible: true }
];

// 2. Función Asíncrona con patrón Error-First
function obtenerLibrosServidor(callback) {
    console.log("Conectando con el servidor...");

    setTimeout(() => {
        // Simular probabilidad de fallo del 20%
        const fallo = Math.random() < 0.20;

        if (fallo) {
            callback("Error 500: No se pudo establecer conexión con el servidor.");
        } else {
            // El primer argumento es null porque no hay error
            callback(null, libros);
        }
    }, 2000);
}

// 3. Función de Filtrado usando forEach
function filtrarDisponibles(lista, criterio) {
    const librosFiltrados = [];
    
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
    // Manejo de Error-First
    if (err) {
        console.error("❌ Ocurrió un problema:", err);
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


// ejercicio integrador:

const libros = [
    {id: 100, titulo : "La llorona", disponible: true},
    {id: 110, titulo : "El Sombreron", disponible: true},
    {id: 120, titulo : "El Cadejo", disponible: true},
    {id: 130, titulo : "La Siguanaba", disponoible: true},
    {id: 140, titulo : "Pinocho", disponible: true},
    {id: 150, titulo}

]