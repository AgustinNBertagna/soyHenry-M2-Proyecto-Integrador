//* Librerias, modulos y constantes.
const { Router } = require("express");
const { getMovies, postMovie } = require("../controllers/moviesController.js");
const { validateMovieData } = require("../middlewares/validateMovieData.js");
const moviesRouter = Router();

//* El Router de movies envia la request al controlador de Movies.
moviesRouter.get("/", getMovies);
moviesRouter.post("/", validateMovieData, postMovie);

module.exports = { moviesRouter };