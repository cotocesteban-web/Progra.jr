// Importamos tanto el default como las funciones específicas
import conversor, { metrosAKilometros, kilometrosAMetros } from './conversor.mjs';

console.log("--- Prueba ES Modules (.mjs) ---");
console.log(`Nombrada: 10 km son ${kilometrosAMetros(10)} m`);
console.log(`Default: 3000 m son ${conversor.metrosAKilometros(3000)} km`);