console.log("Movies App");
//> Const >

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
//> Api Marvel>
/* const addMarvel = async () => {
  try {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=db1160edf7e8c59f7579740be46f5d61&hash=CD7785C400226AA73F07E97EE3D1B36C"
    );

    // Status >
    if (response.status === 200) {
      const data = await response.json();
     let characters = " ";

     data.results.forEach((character) => {
     characters += ` {

     }`
     });
      //> Container >
       document.getElementById("containerMarvel").innerHTML = characters;

    } else if (response.data.status === 400) {
      console.log("Error! Character and pages not exist");
    } else {
      console.log("Page Not exist in this Web");
    }
  } catch (error) {
    console.log(error);
  }
};
addMarvel(); */

// => API Marvel Character ==>
