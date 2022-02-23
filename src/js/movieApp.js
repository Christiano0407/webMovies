// Hamburger Menu ====>
const header = document.getElementById("header");
const navList = document.getElementById("navList");
const list = document.getElementById(".list");
const burgerMenu = document.getElementById("burger");

let hamburgerOpen = false;

// ==Event ===================>>
burgerMenu.addEventListener("click", () => {
  console.log("active");
  if (navList.classList.contains("active")) {
    navList.classList.add("hidden");
    navList.classList.remove("active");
  } else {
    navList.classList.add("active");
    navList.classList.remove("hidden");
  }
});
