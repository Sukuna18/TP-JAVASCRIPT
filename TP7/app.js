//https://api.themoviedb.org/3/
const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=75ab2a3184c6669aa4e548d7d0fc1c20";
  const searchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=75ab2a3184c6669aa4e548d7d0fc1c20&query=';

const imgPath = "https://image.tmdb.org/t/p/w500";
let searchForm = document.querySelector("form");
let searchInput = document.querySelector(".input-search");
let movieContain = document.querySelector(".movie-grid-container");
async function getMovies(url) {
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  return json.results;
}

getMovies(apiUrl).then((movies) => {
  movies.map((movie) => {
    let divMovie = document.createElement("div");
    divMovie.classList.add("image");
    let img = document.createElement("img");
    img.src = imgPath + movie.poster_path;
    divMovie.appendChild(img);
    let divName = document.createElement("div");
    divName.classList.add("movie-name");
    let pName = document.createElement("p");
    pName.textContent = movie.title;
    divName.appendChild(pName);
    let span = document.createElement("span");
    span.classList.add("rate");
    span.textContent = movie.vote_average.toFixed(1);
    divName.appendChild(span);
    divMovie.appendChild(divName);
    let divOverview = document.createElement("div");
    divOverview.classList.add("movie-description");
    let p = document.createElement("p");
    p.textContent = movie.overview;
    divOverview.appendChild(p);
    divMovie.appendChild(divOverview);
    movieContain.appendChild(divMovie);
  });
});
//search movies function

//search function
searchForm.addEventListener("submit", (e) => {
  //prevent default
  e.preventDefault();
  let searchValue = searchInput.value;
  if (searchValue) {
    //clear the input
    searchInput.value = "";
    //clear the movies
    movieContain.innerHTML = "";
    //get the movies
    getMovies(searchUrl + searchValue).then((movies) => {
      if (movies.length === 0) {
        movieContain.innerHTML = "No results found.";
      } else {
        //display the movies
        movies.map((movie) => {
          //create the div
          let divMovie = document.createElement("div");
          divMovie.classList.add("image");
          let img = document.createElement("img");
          img.src = imgPath + movie.poster_path;
          divMovie.appendChild(img);
          let divName = document.createElement("div");
          divName.classList.add("movie-name");
          let pName = document.createElement("p");
          pName.textContent = movie.title;
          divName.appendChild(pName);
          let span = document.createElement("span");
          span.classList.add("rate");
          span.textContent = movie.vote_average.toFixed(1);
          divName.appendChild(span);
          divMovie.appendChild(divName);
          let divOverview = document.createElement("div");
          divOverview.classList.add("movie-description");
          let p = document.createElement("p");
          p.textContent = movie.overview;
          divOverview.appendChild(p);
          divMovie.appendChild(divOverview);
          movieContain.appendChild(divMovie);
        });
      }
    });
  }
});
