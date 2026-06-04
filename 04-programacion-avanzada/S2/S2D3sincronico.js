console,log("inicio sincronico");

function trabajoPesado() {
    const fin =Date.now() + now

    )
}



console.log("Inicio asincronico");
setTimeout(() => {
    console.log("Temporizador listo(no bloqueo")
}, 50000);

console.log("Se puede seguir hacciendo otras cosas")
console.log("Fin Asincronico")


/// los callback: al estilo clasico.

/// Convenciono errot-primero 

/// Ejemplo Promesas:

const tarea = new Promise((resolve, reject) => {
    let exito = true
    if (exito)
        resolve("Todo salio bien")
    else
        reject("Algo fallo")
})

tarea.then(mensaje => console.log(mensaje))
    .catch(error => console.log(errror))


/// Promesa desde cero:

function tareaAsincronica(ms) {
    // 1. Corregido a "Promise" en singular
    return new Promise((resolve, reject) => {
        // 2. Corregido a "<=" (operador menor o igual)
        if (ms <= 0) {
            return reject(new Error("Tiempo invalido"));
        }
        // 3. Corregido setTimeout con paréntesis y ${ms} para la variable
        setTimeout(() => {
            resolve(`Listo en ${ms} ms`);
        }, ms);
    });
}

// Ejecución de la promesa
tareaAsincronica(1000)
    // 4. Corregido "msg" por "mensaje" para que coincida
    .then(mensaje => console.log("ok:", mensaje))
    .catch(error => console.log("fallo:", error.message))
    .finally(() => console.log("siempre me ejecuto"));


    // async y await en javascript
    