module.exports = {
  createCard: (movie) => {
    const { title, year, director, duration, genre, rate, poster } = movie;

    let movieCard = document.createElement("div");
    movieCard.classList.add(
      "movie_card",
      "pt-2",
      "card",
      "col-4",
      "rounded",
      "shadow-xl",
      "p-2",
      "bg-white",
      "rounded"
    );
    movieCard.innerHTML = `
  <img src="${poster}" class="movie_poster card-img-top img-fluid">
  <div class="card-body">
   <h3 class="card-title text-primary text-center">${title}</h3>
  </div>
  <ul class="list-group list-group-flush">
   <p class="movie_info list-group-item text-primary d-inline p-2 bg-primary text-dark font-weight-bold text-center">Año: ${year}</p>
   <p class="movie_info list-group-item text-primary d-inline p-2 bg-primary text-dark font-weight-bold text-center">Director: ${director}</p>
   <p class="movie_info list-group-item text-primary d-inline p-2 bg-primary text-dark font-weight-bold text-center">Duración: ${duration}</p>
   <p class="movie_info list-group-item text-primary d-inline p-2 bg-primary text-dark font-weight-bold text-center">Géneros: ${genre.join(
     ", "
   )}</p>
   <p class="movie_info list-group-item text-primary d-inline p-2 bg-primary text-dark font-weight-bold text-center">Rating: ${rate}</p>
  </ul>`;

    return movieCard;
  },
};