module.exports = {
  validateForm: (movieData) => {
    const { title, year, director, duration, genre, rate, poster } = movieData;
    if (
      !title ||
      !year ||
      !director ||
      !duration ||
      !genre ||
      !rate ||
      !poster
    ) {
      alert("Faltan datos requeridos!!! 🤕");
      return;
    }
    if (Number(year) < 1895) {
      alert("No existen peliculas previas a 1895!!! 🤓");
      return;
    }
    if (!/^[^\d]+$/.test(genre)) {
      alert("Los generos no pueden ser numeros!!! 😵");
      return;
    }
    if (Number(rate) === NaN) {
      alert("El rating debe ser un numero!!! 🤦");
      return;
    }
    if (!poster.startsWith("https://")) {
      alert("La URL no es valida!!! 🤪");
      return;
    }

    return movieData;
  },
};