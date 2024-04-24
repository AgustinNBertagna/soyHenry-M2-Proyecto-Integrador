const { mapMovie } = require("./mapMovie");
const { postMovie } = require("./postMovie");
const { resetForm, preventForm } = require("./resetForm");
const movieForm = document.getElementById("movie_Form");
const submitBtn = document.getElementById("submit_form");
const resetBtn = document.getElementById("reset_form");

mapMovie();

movieForm?.addEventListener("submit", preventForm);
submitBtn?.addEventListener("click", postMovie);
resetBtn?.addEventListener("click", resetForm);