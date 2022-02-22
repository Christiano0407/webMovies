// Modules ==>
import playOne from "./modules/app.js";
import { twoPlay, plugin } from "./modules/app.js";
console.log(playOne());
console.log(twoPlay());
console.log(plugin());

// ==== Javascript GSAP ======
const tl = gsap.timeline({ default: { ease: "power2.out" } });

tl.fromTo(
  ".header",
  { y: "-200", opacity: 0 },
  { y: "0", opacity: 1, delay: 1, duration: 1 },
  " < "
);

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
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  // when window width is 320 >= 320px
  breakpoints: {
    760: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
