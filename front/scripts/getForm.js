const { validateForm } = require("./validateForm");

module.exports = {
  getForm: () => {
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value.split(",");
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    const movieData = {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    };

    return validateForm(movieData);
  },
};