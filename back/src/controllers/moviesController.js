//* Librerias, modulos y constantes.
const { returnMovies, createMovie } = require("../services/moviesServices.js");

module.exports = {
  //* Controlador de requests GET a "/movies".
  getMovies: async (req, res) => {
    const movies = await returnMovies();
    res.status(200).json(movies);
  },
  postMovie: async (req, res) => {
    const movieData = req.body;
    const movie = await createMovie(movieData);
    res.status(201).json(movie);
  },
};