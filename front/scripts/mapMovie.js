const axios = require("axios");
const { createCard } = require("./createCard");
const URL = "http://localhost:3000/movies";

module.exports = {
  mapMovie: async () => {
    let moviesContainer = document.getElementById("movies_container");

    /* $.get(URL, (movies, status) => {
    if (status === "success") {
      movies.map(createCard).forEach((movie) => {
        moviesContainer.appendChild(movie);
      });
    } else {
      moviesContainer.innerHTML =
        "<h3>No hay peliculas en este momento 😢. Vuelva pronto! 🤭</h3>";
    }
  }); */

    try {
      const movies = await axios.get(`${URL}`);
      movies.data.map(createCard).forEach((movie) => {
        moviesContainer?.appendChild(movie);
      });
    } catch (err) {
      moviesContainer.innerHTML =
        "<h3>No hay peliculas en este momento 😢. Vuelva pronto! 🤭</h3>";
    }
  },
};