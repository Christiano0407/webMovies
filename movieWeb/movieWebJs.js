console.log("Movies App");
//> Const >
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const main = document.getElementById("main");
const homeIntro = document.querySelector(".home__intro");
const conteiner = document.getElementById("conteiner");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

//> Intersection Observer ==>
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(conteiner);

// ==> Swiper Carousel
//>>>>>>
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidePerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    760: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 8,
      spaceBetween: 40,
    },
  },
});
