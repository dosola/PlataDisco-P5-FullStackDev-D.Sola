// Unidad 08 - Dom - Saludo personalizado
// https://pledu.plataforma5.la/javascript-full-stack-para-principiantes/08---dom/ejercicio-037bdb2e

// let nombre = prompt("Cuál es tu nombre?");
// const span = document.querySelector("#welcome");

// if (nombre.length < 2) {
//   nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
// }
// span.textContent = "Hola, " + nombre;



// unidad 09 1. Say your Name Remix
//https://pledu.plataforma5.la/javascript-full-stack-para-principiantes/09---loops-y-while-/ejercicios-7e9b755d

let nombre = prompt("Cuál es tu nombre?").toUpperCase();
while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
  ).toUpperCase();
}
const span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
const itkt = document.querySelector(".iTicket");
itkt.setAttribute("class", "bi bi-ticket-perforated-fill");



/// Unidad 12   .2 Favoritos
//Deberás crear una función que tome por parámetro un array 
//con tus discos favoritos y luego añada a los mismos una estrella.
const favoriteRecords = ["album1"];
function addFavorites(favorites) {
  const iconos = document.querySelectorAll("i");

  iconos.forEach((i) => {
    if (favorites.includes(i.className)) {
      iconos.style.display = "block";
    } else {
      iconos.style.display = "none";
    }
  });
}

addFavorites(favoriteRecords)



