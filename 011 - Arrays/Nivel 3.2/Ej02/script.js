// *** Ej02  Ejercicio 2
// Tenemos un Arreglo de números en la Variable numbers. 
// Usando .filter(), creá un nuevo Arreglo que contenga solo 
// los números pares.

let numeros = [3, 7, 6, 13, 2, 24, 99];

let pares = numeros.filter(function(numero) {
    return numero % 2 === 0; 
});


console.log(pares);
