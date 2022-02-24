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
  menuToggle.classList.toggle("active");

  
});
