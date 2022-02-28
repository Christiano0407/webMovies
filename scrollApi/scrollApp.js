console.log("API Javascript Hello");
// API Javascript Scroll ==>
const addMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-Mx"
    );
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();

      let movies = " ";

      data.results.forEach((movie) => {
        movies += `
          
          `;
      });

      // ==> Container>
      document.querySelector("swiper-slide").innerHTML = movies;
    } else if (response.data.status === 404) {
      console.log("Sorry, Page not Charging");
    } else {
      console.log("Not Exist!");
    }
  } catch (error) {
    console.log("Error");
  }
};

addMovies();
