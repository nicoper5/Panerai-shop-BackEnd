module.exports = async () => {
  // Ejecutar seeders (datos de prueba):
  await require("./seeders/seeders")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
