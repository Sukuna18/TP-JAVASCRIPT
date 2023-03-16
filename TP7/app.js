const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=75ab2a3184c6669aa4e548d7d0fc1c20";
const searchUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=75ab2a3184c6669aa4e548d7d0fc1c20&query=";
const imgPath = "https://image.tmdb.org/t/p/w500";
const searchForm = document.querySelector("#btn");
const searchInput = document.querySelector(".input-search");
const movieContain = document.querySelector(".movie-grid-container");
const template = document.querySelector(".template");
let currentPage = 2;

// Fonction pour créer les éléments de film
function createMovieElements(movies) {
  movies.map((movie) => {
    let clone = template.content.cloneNode(true);
    let img = clone.querySelector("img");
    let title = clone.querySelector(".movie-name p");
    let rating = clone.querySelector(".rate");
    let description = clone.querySelector(".movie-description p");
    img.src = movie.poster_path ? imgPath + movie.poster_path : "No-image.jpg";
    title.textContent = movie.title;
    rating.textContent = movie.vote_average.toFixed(1);
    description.textContent = movie.overview;
    movieContain.appendChild(clone);
    window.addEventListener("load", removeSkeleton(img, title, rating));
  });
}

// Enlever la classe .skeleton une fois le navigateur chargé
function removeSkeleton(img, title, rating) {
  setTimeout(() => {
    img.classList.remove("skeleton");
    title.classList.remove("skeleton");
    rating.classList.remove("skeleton");
  }, 2000);
}

// Fonction asynchrone pour récupérer les films à partir de l'API
async function getMovies(url, page) {
  const res = await fetch(`${url}&page=${page}`);
  const json = await res.json();
  return json.results;
}

getMovies(apiUrl, 1).then((movies) => {
  createMovieElements(movies);
});

// Chargement de films lors du défilement
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getMovies(apiUrl, currentPage).then((movies) => {
      createMovieElements(movies);
      currentPage++; // Incrémenter la page actuelle
    });
  }
});

// Recherche de films
searchForm.addEventListener("click", (e) => {
  e.preventDefault();
  let searchValue = searchInput.value;
  if (searchValue) {
    searchInput.value = "";
    movieContain.innerHTML = "";
    currentPage = 2; // Réinitialisations
    getMovies(searchUrl + searchValue, 1).then((movies) => {
      if (movies.length === 0) {
        movieContain.innerHTML = "No results found.";
      } else {
        createMovieElements(movies);
      }
    });
  }
});
