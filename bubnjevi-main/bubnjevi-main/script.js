// const klikni = (dugme) => {
//     console.log(dugme.innerText);
// }

// let btns = document.querySelectorAll('button');

// btns.forEach(function(btn){

//     //event listener koji ceka za svaki klik, za svaki button
//     btn.addEventListener("click", function(event){
//         let clicked_btn = event.target;

//         console.log(clicked_btn.innerText);

//     });
// });

// let link = document.querySelector('#link');

// link.addEventListener('click', (event) => {
// event.preventDefault();

// console.log(event.target);
// })

// let form = document.querySelector('form');

// form.addEventListener('submit', (event) => {

//     event.preventDefault();

//     console.log('test');

// });

// let opcija = document.querySelector('select');

// opcija.addEventListener("change", (event) => {
//     console.log(event.target.value);
// });

// window.addEventListener("resize", () => {
//     console.log(window.innerWidth);

//     if(window.innerWidth > 1000){
//         console('Prozor veci od 1000');
//     }
//     else {
//         console.log('Prozor manji od 1000');
//     }
// });

window.addEventListener("keydown", (event) => {
  let code = event.keyCode;
  let keyElement = document.querySelector(`div[data-key="${code}"]`);

  if (!keyElement) return; //da prekinemo izvrsavanje ovog addeventlistener

  let audio = document.querySelector(`audio[data-key="${code}"]`);
  audio.ariaCurrentTime = 0; //kad god pritisnemo vracamo ga na 0, ponovo jer inace nece da ucita 2x brzo
  audio.play();
});
