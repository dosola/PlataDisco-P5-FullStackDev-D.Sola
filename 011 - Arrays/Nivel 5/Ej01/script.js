// Ej01 - sumArray()
// En este ejercicio, deberás crear una Función 
// sumArray que acepte un Arreglo de números y 
// devuelva la suma de todos ellos. Usá este 
// código para testear tu Función:


function sumArray(arr) {
    let suma = 0;
    for (let num of arr) {
        suma += num;
    }
    return suma;
}

// Testeo de la función sumArray
console.log(sumArray([1, 2, 3, 4, 5])); // Debería devolver 15
console.log(sumArray([10, 20, 30])); // Debería devolver 60
console.log(sumArray([-1, 0, 1])); // Debería devolver 0
console.log(sumArray([])); // Debería devolver 0, ya que la suma de un arreglo vacío es 0