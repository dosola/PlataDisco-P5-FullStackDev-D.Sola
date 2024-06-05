let nombre = prompt("¿Cuál es tu nombre?");
while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
  ).toUpperCase();
}


let edad = parseInt(prompt("¿Edad?"));
let boton_comprar = document.querySelectorAll(".buyclass");

if (edad < 18) {
  swal('Lo siento', 'Solo los mayores pueden comprar tickets.', 'info');
  boton_comprar.forEach(element => {
    element.style.display = "none";
  });
  
} else {
  //alert("Hola " + nombre + " de " + edad + " años, te interesaría adquirir entradas?");
  saludo = `Hola, ${nombre} de ${edad} años.`;
  swal(saludo, ' ¿Te interesaría comprar tickets?', 'info');

}


const span = document.querySelector("#welcome");

let i = 0;


// Unidad 07 JavaScript - Primer ejercicio
// https://pledu.plataforma5.la/javascript-full-stack-para-principiantes/07---javascript-/primer-ejercicio-4387a908
if (nombre.length <= 2) {
   nombre = prompt("Demasiado corto, dinos cuál es realmente tu nombre? (3 craact. min)");




// Unidad 12 - OBJETOS
// 12.1 Definimos el objeto tickets.
// let tickets = {
//   "Las Vegas": 5,
//   "Tokyo":2,
//   "Brisbane":1,
//   "Inglewood":0,
//   "Auckland":10,
//   "Dunedin":2,
// }




// 12.2 Definimos la FN getTickets que debe modificar la cantidad
// de tickets a medida que el ususario los compre.
// Además, tendrás que mostrar un alerta si la compra fue exitosa
// o informarle al usuario en caso contrario si los tickets se agotaron.
// // JN JOHAN PARA DISABLEAR BOTONES
function getTickets(evento) {
  if (tickets[evento]>=1) {
    swal(
      "Vendido!", 
      "Tienes un ticket para " + evento, 
      "success")
    tickets[evento]--;
    
  } else if (tickets[evento]==0) {
    disableSoldOutButtons(evento);
    swal('Lo sentimos...','Los tickets para ' + evento + ' se agotaron','warining');
  }
}




// 12.3 Además, si las entradas están agotadas para una fecha
// deberás crear una función disableSoldOutButtons, que deshabilita
// el botón de compra y cambia su texto a "SOLD OUT".

 function disableSoldOutButtons() {
   for (let evento in tickets) {
       let button = document.getElementById(evento.replace(/\s+/g, ''));
       if (tickets[evento] === 0) {
           button.disabled = true;
           button.textContent = "AGOTADOS";
           button.style.backgroundColor = "red";
       }
      }
    }
  }

