module.exports = {
  validateMovieData: (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    if (!title || !year || !director || !duration || !genre || !rate || !poster)
      return res.status(400).json({
        message: "Error! Faltan datos en el cuerpo de la solicitud!",
      });

    if (Number(year) < 1895)
      return res.status(400).json({
        message: "Error! No existen peliculas antes de 1895!",
      });

    if (!/^[^\d]+$/.test(genre))
      return res.status(400).json({
        message: "Error! Los generos no pueden ser numeros!",
      });

    if (Number(rate) === NaN)
      return res.status(400).json({
        message: "Error! El rating debe ser numero!",
      });

    if (!poster.startsWith("https://"))
      return res.status(400).json({
        message: "Error! El formato de la URL del poster no es valido!",
      });

    next();
  },
};