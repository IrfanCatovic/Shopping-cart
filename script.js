"use strict";

// function testing() {
//   let link = document.querySelector(".drugi-link").innerText;
//   let gl_div = document.querySelector(".glavni-div");

//   link.setAttribute('class', 'plava-boja') mozemo da menjamo atribute nekog elementa
//   console.log(link.getAttribute("data-test")); dobijamo vrednost ovog atributa
//   link.removeAttribute("data-test"); ukoliko zelimo da sklonimo atribut

//   gl_div.innerHTML = '<span>Klikni ovaj link: <a href="#">klik </span>';

//   console.log(link);
// }

//Validacija login
// function Validacija() {
//   let input = document.querySelector("#email");
//   let value = input.value;

//   if (value.includes("@") && value.includes(".")) {
//     let pozicijaAt = value.indexOf("@");
//     let pozicijaTacka = value.indexOf("."); //pokazuje poziciju . u reci koju pisemo

//     if (pozicijaTacka - pozicijaAt > 1) {
//       return true; // Valid email
//       console.log("Valid email");
//     } else {
//       false;
//       console.log("Unvalid email");
//     } // Invalid email
//   }
// }

function addToCart(element) {
  let mainEl = element.closest(".single-item");
  let price = mainEl.querySelector(".price").innerText;
  // let input = element.previousElementSibling;
  console.log(price);
}
