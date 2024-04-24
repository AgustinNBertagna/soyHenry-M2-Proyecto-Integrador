module.exports = {
  resetForm: () => {
    const titleInp = document.getElementById("title");
    const yearInp = document.getElementById("year");
    const directorInp = document.getElementById("director");
    const durationInp = document.getElementById("duration");
    const genreInp = document.getElementById("genre");
    const rateInp = document.getElementById("rate");
    const posterInp = document.getElementById("poster");

    titleInp.value = "";
    yearInp.value = "";
    directorInp.value = "";
    durationInp.value = "";
    genreInp.value = "";
    rateInp.value = "";
    posterInp.value = "";
  },

  preventForm: (event) => {
    event.preventDefault();
  },
};