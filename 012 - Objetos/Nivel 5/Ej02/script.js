// // Ej02  - Contar caracteres
// Usá un objeto para contar letras en una palabra. Escribí una 
// función llamada contarCaracteres.

// Dada una cadena de caracteres, contarCaracteres devuelve un 
// objeto donde cada propiedad es un caracter en la cadena dada, siendo 
// su valor cuántas veces apareció en la cadena dada. Si se le da una 
// cadena vacía, su función debería devolver un objeto vacío.

// Ejemplo:

// let result1 = contarCaracteres('banana');
// console.log('should log "{b: 1, a: 3, n: 2}":', result1);
// let result2 = contarCaractere('');
// console.log('should log "{}":', result2);


function contarCaracteres(str) {
    // Creo nuevo objeto para almacenar recuentos
    let countObj = {};
    
    // Iteramos sobre la cadena
    for (let char of str) {
      // Si encuentro el caracter, incremento el contador
      if (countObj[char]) {
        countObj[char]++;
      } else {
        // Si NO encuentro el, inicio contador en 1
        countObj[char] = 1;
      }
    }
    
    // Devuellvo el recuento 
    return countObj;
  }
  
  
  
  let result1 = contarCaracteres('banana');
  console.log(result1);
  
  let result2 = contarCaracteres('');
  console.log(result2);

