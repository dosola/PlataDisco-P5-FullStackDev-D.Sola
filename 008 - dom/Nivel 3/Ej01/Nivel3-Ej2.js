

let numeroSecreto = 5;
let numeroUsuario = parseInt(prompt("Ingrese un numero"));

if (numeroSecreto === numeroUsuario) {
    alert("Adivinaste!")
} else {
    if (numeroSecreto < numeroUsuario) {
        alert("El numero ingresado es mayor al secreto.")
    } else {
        alert("El numero ingresado es menor al secreto.")
    }    
}
