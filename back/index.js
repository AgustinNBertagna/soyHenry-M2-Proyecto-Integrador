//* Librerias, modulos y constantes.
const app = require("./src/server.js");
const { conDb } = require("./src/config/conDb.js");
const PORT = 3000;

//* Conexión a Base de Datos.
startServer = async () => {
  try {
    await conDb();
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();