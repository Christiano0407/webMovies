// Modules ==>
import playOne from "./modules/app.js";
import { twoPlay, plugin } from "./modules/app.js";
console.log(playOne());
console.log(twoPlay());
console.log(plugin());

// ===>> Menu Burger <<<===
// =================== Const
const btnMenu = document.querySelector(".menu__active");
const listMedia = document.querySelector(".nav__media");

// ===============> Event
btnMenu.addEventListener("click", () => {
  console.log("Click");

  if (listMedia.classList.contains("active")) {
    listMedia.classList.add("hidden");
    listMedia.classList.remove("active");
  } else {
    listMedia.classList.remove("hidden");
    listMedia.classList.add("active");
  }
});

// Swiper Slider ===================>>>
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  /*  scrollbar: {
    el: ".swiper-scrollbar",
  }, */
});
