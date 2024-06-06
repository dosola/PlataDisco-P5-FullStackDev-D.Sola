// *** Ej 1 - Fibonacci
// En este ejercicio deberás escribir una Función que acepte un
 // número X (que indica la posición) y que devuelva otro número 
 // (el que se encuentra en esa posición) en la serie de Fibonacci. 
 // En otras palabras, imprimirá el número que está en la posición 
 // contando X cantidad de lugares.


 function fibonacci(N) {
  let i = N;
  let resultado = 0;
  let siguiente = 1;
  while (i > 1) {
    siguiente = siguiente + resultado;
    resultado = siguiente - resultado;
    i--;
  }
  return resultado;
}



console.log(fibonacci(2))
console.log(fibonacci(5));
console.log(fibonacci(8));