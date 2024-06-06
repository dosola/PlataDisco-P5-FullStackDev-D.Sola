// *** Ejercicio 3
// Tenemos un Arreglo de palabras al azar en la Variable palabras. 
// Usando .filter(), deberás separar en un nuevo Arreglo aquellas palabras que no tengan más de 3 letras.

let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']

const  palabrasCortas  = palabras.filter(function(palabra) {
    return palabra.length <= 3; // si la palabra tiene 3 o menos caracteres... retorno.
});

console.log(palabrasCortas); 

