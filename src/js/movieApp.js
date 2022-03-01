// Hamburger Menu ====>
const header = document.getElementById("header");
const navList = document.getElementById("navList"); // Menu y nav-list
const list = document.getElementById(".list"); // Menu List e links
const menuToggle = document.getElementById("menu-toggle"); //Mobile-Menu

let hamburgerOpen = false;

// ==Event ===================>>
menuToggle.addEventListener("click", () => {
  console.log("active");
  menuToggle.classList.toggle("is-active");
  navList.classList.toggle("active");
});

// ============ API Movies ============
const addMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-Mx"
    );

    console.log(response);
    //> Status >
    if (response.status === 200) {
      const data = await response.json();

      let movies = " ";
      data.results.forEach((movie) => {
        movies += `
        <div class="movies">
         <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
         <h1 class="title"> ${movie.title} </h1>
          </div>`;
      });
      // Container =>
      document.getElementById("container").innerHTML = movies;
    } else if (response.data.status === 400) {
      console.log("Error! Page not exist");
    } else {
      console.log("Movies is not exist");
    }
  } catch (error) {
    console.log(error);
  }

  // => Llamar a container ===>
};

addMovies();

// GSAP Animation ====>
const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
// => Index =>
tl.fromTo(
  "#header",
  { y: "-300", opacity: 0, autoAlpha: 0 },
  { y: "0", delay: 1, opacity: 1, autoAlpha: 0.5 },
  " < "
);
// => Index Main ==>
tl.fromTo(
  "#main-index",
  { opacity: 0, autoAlpha: 0 },
  { opacity: 1, autoAlpha: 0.5, delay: 1.2 }
);
//==> Container Movies ==>
tl.fromTo(
  "#container",
  { autoAlpha: 0, opacity: 0 },
  { autoAlpha: 1, opacity: 1, delay: 1.5 }
);
