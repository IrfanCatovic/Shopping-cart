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

//I can use this function on every button bcs of action onClick(this) - it sends informations of div where button is clicked
//

let allTotal = 0;

function addToCart(element) {
  let mainEl = element.closest(".single-item");
  let price = mainEl.querySelector(".price").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let kol = mainEl.querySelector("input").value;
  let cartItems = document.querySelector(".cart-items");

  if (parseInt(kol) > 0) {
    price = price.substring(1);
    price = parseInt(price);

    let total = price * parseInt(kol);

    allTotal += total;

    cartItems.innerHTML += `

    <div class="cart-single-item"> 
      <h3>${name}</h3>
      <p>${price} x ${kol} = $<span>${total}</span></p>
      <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
    </div>`;

    document.querySelector(".total").innerText = `Total = ${allTotal}`;

    element.innerText = "Dodato";
    element.setAttribute("disabled", "true");
  } else {
    alert("Odaberi kolicinu");
  }

  // let input = element.previousElementSibling;
}
function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  let price = mainEl.querySelector("p span").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let povrce = document.querySelectorAll(".single-item");

  price = parseInt(price);
  allTotal -= price;

  document.querySelector(".total").innerText = `Total: $${allTotal}`;

  mainEl.remove();

  povrce.forEach(function (vege) {
    let itemName = vege.querySelector(".si-content h3").innerText;
    if (itemName === name) {
      vege.querySelector(".actions input").value = 0;
      vege.querySelector(".actions button").removeAttribute(".disabled");
      vege.querySelector(".actions button").innerText = "Dodaj";
    }
  });
}
