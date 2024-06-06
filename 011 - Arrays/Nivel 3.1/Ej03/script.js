
// *** Ej 03  Biggest Smallest

//   1 - Escribir una Función llamada biggest_smallest que tenga un 
//       Argumento (que haga referencia a un Arreglo de números).
// 

function biggest_smallest(numeros) {
    if (numeros.length === 0) {
        return []; // Si el arreglo está vacío, retornar otro vacío.
    }

    let maximo = numeros[0]; 
    let minimo = numeros[0]; 

//   3.2 Utilizar el método forEach() para encontar el número más 
//   grande y el número más chico.
    numeros.forEach(function(numero) {
        if (numero > maximo) {
            maximo = numero; // Si el nro leído es máximo, actualizo la variable "maximo"
        }
        if (numero < minimo) {
            minimo = numero; // Si el nro leído es mínimo, actualizo la variable "minimp"
        }
    });

//   3.3   Creamos un nuevo arreglo con el número máximo y el mínimo
    let resultado = [maximo, minimo];
    return resultado;
}

// Ejemplo de uso
let numeros = [111, 27, 31, 44, 101, 213, 33, 58];
console.log(biggest_smallest(numeros)); // Devuelve [27, 213]