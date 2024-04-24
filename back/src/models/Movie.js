//* Librerias, modulos y constantes.
const moongose = require("mongoose");

//* Schema de Movie.
const movieSchema = moongose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1895, `No existen peliculas previo a {VALUE}`],
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  poster: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (input) {
        return input.includes("https://");
      },
      message: `{props.value} no es una URL válida`,
    },
  },
});

module.exports = {
  //* Model de Movie a partir del Schema de Movie.
  Movie: moongose.model("Movie", movieSchema),
};