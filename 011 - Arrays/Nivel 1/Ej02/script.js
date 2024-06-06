// EJ 02 - Amigos
//En este ejercicio deberás crear un Arreglo con 5 amigos. Dos de ellos, deben repetirse.

let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"];


// Escribí un código que chequee si tenés algun amigo llamado Félix.
// Si es así, deberá mostrar un mensaje que diga: "Tengo un amigo que se llama Félix", sino: "Sería bueno tener un amigo que se llame Félix".


let i = 0;
while (i < array.length) {
    if (array[i].toLowerCase() === "félix") {
        console.log("Tengo un amigo que se llama Félix");
        i++
    } else {
        console.log("Sería bueno tener un amigo que se llame Félix");
    }

}



// Transformá tu código en una Función que reciba como Argumento cualquier nombre y verifique si tenés ese amigo o 
// no (repitiendo las mismas frases que en el punto anterior).

function buscarEnArray(stringABuscar, array) {
    // Recorremos cada elemento del array
    while (i < array.length) {
        if (array[i].toLowerCase() === stringABuscar.toLowerCase()) {
            console.log("Tengo un amigo que se llama " + stringABuscar);
            i++
        } else {
            console.log("Sería bueno tener un amigo que se llame " + stringABuscar);
        }
    }
}

