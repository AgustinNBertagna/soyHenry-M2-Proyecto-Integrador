//* Librerias, modulos y constantes.
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { moviesRouter } = require("./routes/moviesRouter.js");
const app = express();

//* Middlewares.
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//* Routers.
app.use("/movies", moviesRouter);

module.exports = app;