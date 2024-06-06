if ( 4 < 10 ) {
    alert("El primer número es menor que el segundo.")
}

if ( 4 > 10 ) {
alert("--");
} else {
    alert("el primer numero es mayor que el primero");
}

let sentencia = prompt("¿Cómo estás?").toLowerCase;
if (sentencia === "triste") {
console.log("No estés triste, la inflación parece estar bajando.");
}

let numeroSecreto = 5;
let numeroUsuario = parseInt(prompt("¿Cual es el número secreto?"));
if (numeroSecreto =! numeroUsuario )
{
    alert("Número incorrecto.")
} else {
    alert("adivinaste!");
}

let contrasenaingresada = prompt("Ingrese contraseña: ");
let contrasena = "gato123";
if( contrasena == contrasenaingresada)
{
    window.location = "http://www.google.com";
} else {
    alert("Contraseña errónea");
}

