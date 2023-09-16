let movie = document.querySelector(".movies");
let apikey = document.querySelector("#apiKey");
let search = document.querySelector("#search");

document.addEventListener("DOMContentLoaded", () => {
  const movieData = async (apiKey, movieTitle) => {
    try {
      let data = await fetch(
        " http://www.omdbapi.com/?i=tt3896198&apikey=3e7caed7"
      );

      let movieDetails = await data.json();
      let index = 1;
      let movies = "";
      for (let key in movieDetails) {
        if (movieDetails.hasOwnProperty(key)) {
          movies += `
              <div class="movie">
              <img
                class="poster"
                src=${movieDetails.Poster}
                alt="poster"
              />
              <div class="keyAndName">
                  <div class="keyValue">
                      <h1>${index}</h1>
                  </div>
                <p class="name">${movieDetails.Title}</p>
              </div>
            </div>
              `;
          index++;
        } else {
          movies = "<p>No movie details found.</p>";
        }
      }
      movie.innerHTML = movies;
    } catch (error) {
      console.log(error);
    }
  };
  movieData();
});
