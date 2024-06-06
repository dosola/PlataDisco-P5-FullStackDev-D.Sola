let sexoIngresado = prompt("Ingrese sexo (m)ujer o (v)aron: ");
let edadIngresada = prompt("Ingrese su edad: ");
let edadjubilatoria = 0;

if (sexoIngresado == "m") {
    edadjubilatoria = 60;    
} else if (sexoIngresado == "v") {
    edadjubilatoria = 65; 
}



if (edadIngresada < edadjubilatoria) {
    alert("No puede jubilarse, aún no alcanza la edad.")
} else {
    alert("Puede ud. jubilarse.");
}
