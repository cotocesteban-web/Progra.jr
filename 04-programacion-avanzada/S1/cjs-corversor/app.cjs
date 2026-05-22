// Importamos usando require
const { metrosAKilometros, kilometrosAMetros } = require('./conversor.cjs');

console.log("--- Prueba CommonJS (.cjs) ---");
console.log(`5000 metros son: ${metrosAKilometros(5000)} km`);
console.log(`2 kilómetros son: ${kilometrosAMetros(2)} metros`);