
// *** Ej02   REVERSE
// 2.1 
// Creá la Función printReverse que tome un Arreglo como 
// Argumento y que imprima en la consola cada elemento 
// en orden inverso (no tenés que invertir el Arreglo).

function printReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]); 
    }
}



//   2.2
//   Creá la Función "reverser" que tome un Arreglo como 
//   Argumento y devuelva uno nuevo invertido.

function reverser(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {  
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido; 
}


// 2.3
// Cuando lo resuelvas, podés volver a realizarlo sin el método
// reverse. Esto te ayudará a mejorar tu lógica de programación.




printReverse(["a", "b", "c"])

printReverse([1, 2, 3, 4])

reverser(["a", "b", "c"])

reverser([1, 2, 3, 4])