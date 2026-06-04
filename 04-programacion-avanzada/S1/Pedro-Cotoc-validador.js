const nombrePiloto = process.argv[2];
const cargaTon = Number(process.argv[3]);
const capacidadMax = Number(process.argv[4]);


if (!nombrePiloto || isNaN(cargaTon) || isNaN(capacidadMax)) {
    console.error("Error: Debe proporcionar el nombre del piloto, carga y capacidad como números válidos.");
    process.exit(1); 
}

const calcularPorcentaje = (carga, capacidad) => (carga / capacidad) * 100;
const porcentaje = calcularPorcentaje(cargaTon, capacidadMax);
const estado = porcentaje >= 90 ? "Peligro" : "Seguro";

const reporte = {
    piloto: nombrePiloto,
    carga: cargaTon,
    capacidad: capacidadMax,
    porcentaje: porcentaje,
    estado: estado
};

console.log(`Procesando despacho para: ${nombrePiloto}...`);
console.log(reporte);

if (estado === "Peligro") {
    console.log("Alerta!. el peso esta fuera del limite se excedio");
}