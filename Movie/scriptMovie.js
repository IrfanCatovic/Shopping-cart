"use strict";

let allTotal = 0;

function gledao(element) {
  let mainEl = element.closest(".card");
  let price = mainEl.querySelector(".card-price").innerText;

  price = price.substring(8); //We could make price <h3> and just substring 1 but we left it this way
  price = parseFloat(price);

  allTotal += price;
  let zaokruzena = allTotal.toFixed(2);
  document.querySelector(".total-price").innerText = `$ ${zaokruzena}`;

  element.innerText = "Watched";
  element.style.backgroundColor = "green";
  element.style.color = "white";
  // element.setAttribute("disable", "true");

  element.disabled = true;
  mainEl.innerHTML += `
  
  <div class=".cnt-rmv"> 

    <button onclick="removeMovie(this)" class="btn-rmv">Remove</button>
  </div>`;
}

function removeMovie(element) {
  let mainEl = element.closest(".card");
  let grnBtn = mainEl.querySelector(".btn");
  let name = mainEl.querySelector("h3").innerText;
  let price = mainEl.querySelector(".card-price").innerText;
  let movies = document.querySelectorAll(".card");

  price = price.substring(8);
  price = parseFloat(price);

  allTotal -= price;

  grnBtn.innerText = "Watch";
  grnBtn.disabled = false;
  grnBtn.style.backgroundColor = "#007bff";
  element.remove();

  let zaokruzena = allTotal.toFixed(2);
  document.querySelector(".total-price").innerText = `$ ${zaokruzena}`;

  // movies.forEach(function (filmovi) {
  //   let nameMovie = filmovi.querySelector(".card-content h3").innerText;
  //   if (nameMovie === name) {
  //     element.innerText = "Watch";
  //     element.removeAttribute(".disabled");
  //   }
}
