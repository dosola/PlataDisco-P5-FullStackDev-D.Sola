// *** Ej01   Ejercicio 1
// Usando .filter(), completá la Función mayoresOIgualesA5 para que 
// reciba un Arreglo de números y retorne un nuevo 
// Arreglo (solo con números que sean mayores o iguales a 5).

function mayoresOIgualesA5(numeros) {
    // Utilizamos el método filter para filtrar los números mayores o iguales a 5
    let filtrados = numeros.filter(function(numero) {
        return numero >= 5;
    });
    return filtrados;
}


console.log(mayoresOIgualesA5([3, 6, 8, 21]))
