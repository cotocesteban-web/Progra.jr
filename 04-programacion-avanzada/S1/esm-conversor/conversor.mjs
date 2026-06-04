// Exportación nombrada (directa)
export const metrosAKilometros = (m) => m / 1000;
export const kilometrosAMetros = (km) => km * 1000;

// Exportación por defecto (opcional, útil para importar el objeto completo)
export default { metrosAKilometros, kilometrosAMetros };