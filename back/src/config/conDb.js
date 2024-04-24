//* Librerias, modulos y constantes.
const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  //* Conexión a la Base de Datos Cinema.
  conDb: async () => {
    await mongoose.connect(process.env.MONGO_URI);
  },
};