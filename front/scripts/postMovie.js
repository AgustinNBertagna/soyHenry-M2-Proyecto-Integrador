const axios = require("axios");
const { mapMovie } = require("./mapMovie");
const { getForm } = require("./getForm");
const URL = "http://localhost:3000/movies";

module.exports = {
  postMovie: async () => {
    const { title, year, director, duration, genre, rate, poster } = getForm();
    try {
      await axios.post(URL, {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      mapMovie();
      alert("Ya creamos tu pelicula! Vuelve a 'Mi Cine' para verla!")
    } catch (error) {
      alert("Error al crear la pelicula! Intentalo mas tarde!")
    }
  },
};