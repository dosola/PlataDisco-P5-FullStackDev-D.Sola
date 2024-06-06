
// *** Ej 02    Desafío isUniform()
// En este ejercicio deberás crear la Función isUniform que tome 
// un Arreglo como Parámetro y devuelva true si todos los elementos del 
// Arreglo son idénticos. De lo contrario, deberá devolver false.

function isUniform(array) {
    // Si el arreglo tiene menos de 2 elementos, ES uniforme
    if (array.length < 2) {
        return true;
    }

    // Guardo 1er elemento para comaprar con el resto
    let primerElemento = array[0];

    // Itero (desde el 2do) sobre los elementos del array coparando con el 1ro
    for (let i = 1; i < array.length; i++) {
        // Si aparece uno diferente, corto porque el rray no es uniforme
        if (array[i] !== primerElemento) {
            return false;
        }
    }

    // Si llego al final, todos son iguales al primero, ES uniforme.
    return true;
}
