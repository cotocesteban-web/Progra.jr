function preparacionCafe(ms) {
    return new Promise((resolve, reject) => {
        if (ms <= 0) {
            return reject(new Error("Tiempo invalido"));
        }
        setTimeout(() => resolve(`Cafe listo en ${ms} ms`), ms);
    });
}
function preparacionPastel(ms) {
    return new Promise((resolve, reject) => {
        if (ms <= 0) {
            return reject(new Error("Tiempo invalido"));
        }
        setTimeout(() => resolve(`Pastel listo en ${ms} ms`), ms);
    });
}
async function atencionCliente() {
    console.log("Inicio");
    console.log("Su cafe estara listo en 5000 ms");
    const r1 = await preparacionCafe(5000); 
    console.log(r1); 
    const r2 = await preparacionPastel(5000);
    console.log(r2);               // "listo en 3000 ms"
    console.log("listo se puede servir");
}
atencionCliente();

/// asa s muestran todas la promesas con all sin depender una tarea de la otra. solo si una falla todas fallan

function preparacionProducto(ms, producto) {
    return new Promise((resolve, reject) => {
        if (ms <= 0) {
            return reject(new Error("Tiempo invalido"));
        }
        setTimeout(() => resolve(`${producto} listo en ${ms} ms`), ms);
    });
}

async function atencionCliente() {
    console.log("Preparando cafe estara listo en 5000 ms");
    const promesa1 = preparacionProducto(5000, "Cafe");
    console.log("Preparando pastel estara listo en 6000 ms");
    const promesa2 = preparacionProducto(6000, "Pastel");

    const [prom1, prom2] = await Promise.all([promesa1, promesa2]);
    console.log(prom1);
    console.log(prom2);
    console.log("listo para servir");
}
atencionCliente();

// si una falla las otras se muestran /// aun falta terminar
function preparacionProducto(ms, producto) {
    return new Promise((resolve, reject) => {
        if (ms <= 0) {
            return reject(new Error("Tiempo invalido"));
        }
        setTimeout(() => resolve(`${producto} listo en ${ms} ms`), ms);
    });
}

async function atencionCliente() {
    console.log("Preparando cafe estara listo en 5000 ms");
    const promesa1 = preparacionProducto(5000, true, "Cafe");
    console.log("Preparando pastel estara listo en 6000 ms");
    const promesa2 = preparacionProducto(6000, false, "Pastel");
    try {
        const [prom1, prom2] = await Promise.all([promesa1, promesa2]);
        console.log(prom1);
        console.log(prom2);
        console.log("listo para servir");
    } catch (error) {
        console.error("Error en la preparacion:", error);
    }
}
atencionCliente();


// funcion race Muestra el resultado de la primera promesa resuelta el msa rapido
function preparacionProducto(ms, producto) {
    return new Promise((resolve, reject) => {
        if (ms <= 0) {
            return reject(new Error("Tiempo invalido"));
        }
        setTimeout(() => resolve(`${producto} listo en ${ms} ms`), ms);
    });
}

async function atencionCliente() {
    console.log("Preparando cafe estara listo en 5000 ms");
    const promesa1 = preparacionProducto(5000, "Cafetera 1");
    console.log("Preparando cafe estara listo ms");
    const promesa2 = preparacionProducto(6000, "Cafetera 2");

    const [prom1, prom2] = await Promise.race([promesa1, promesa2]);
    console.log(prom1);
    console.log(prom2);
    console.log("listo para servir");
}
atencionCliente();

function timrout(ms) {
    return new
}