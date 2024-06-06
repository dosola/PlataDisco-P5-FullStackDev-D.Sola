// Ej02  - Simulación del Array.join()
// En este ejercicio deberás crear una Función llamada join que reciba un Arreglo y simule el comportamiento del método Array.join().
//      ⚠️Importante: No podés usar el método Array.join() original.


function join(array) {
    let resultado = "";

    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    }

    
    return resultado;
}

// Ejemplos de uso
console.log(join(["h", "o", "l", "a"]));
console.log(join(["c", "h", "a", "u"]));