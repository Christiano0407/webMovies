console.log("Movies App");
// ==> Swiper Carousel {
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
