// *** Ej01   POEMA DESORDENADO
// Usá .split(' ') en poemaDesordenado y guardalo en un Arreglo llamado 
// arregloDesordenado.
// Instanciá un nuevo Arreglo llamado arregloOrdenado.
// Mientras que el largo de arregloDesordenado sea mayor que 0, 
// sacá el primer y el último elemento y guardalo en arregloOrdenado.


let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos";

// 1 -  Usá .split(' ') en poemaDesordenado y guardalo en un Arreglo 
// llamado arregloDesordenado.
let arregloDesordenado = poemaDesordenado.split(" ");

// 2 -  Instanciá un nuevo Arreglo llamado arregloOrdenado.
let arregloOrdenado = [];

// 3 -  Mientras que el largo de arregloDesordenado sea mayor que 0, 
// sacá el primer y el último elemento y guardalo en arregloOrdenado.
while (arregloDesordenado.length > 0) 
{
    // Sacar el primer elemento y último elemento
    arregloOrdenado.push(arregloDesordenado.shift());
    arregloOrdenado.push(arregloDesordenado.pop());
}
console.log(arregloOrdenado);



// 3.5 ¿Cómo sería la condición si usaras un for loop o un while loop?

// Usando un bucle for
for (let i = 0; i < arregloDesordenado.length / 2; i++) {
    // Sacar el primer elemento y el último elemento del arregloDesordenado
    let primerElemento = arregloDesordenado.shift(); // Sacar el primer elemento
    let ultimoElemento = arregloDesordenado.pop();   // Sacar el último elemento

    // Agregar los elementos al arregloOrdenado
    arregloOrdenado.push(primerElemento, ultimoElemento);
}


// Usando un bucle while
while (arregloDesordenado.length > 1) {
    // Sacar el primer elemento y el último elemento del arregloDesordenado
    let primerElemento = arregloDesordenado.shift(); // Sacar el primer elemento
    let ultimoElemento = arregloDesordenado.pop();   // Sacar el último elemento

    // Agregar los elementos al arregloOrdenado
    arregloOrdenado.push(primerElemento, ultimoElemento);
}



// 4
// Creá la Variable poemaOrdenado y dale el valor de un String usando 
// arregloOrdenado y el método .join(' ').
 let poemaOrdenado = arregloOrdenado.join(" ");

 console.log(poemaOrdenado);
