// 2. Variable miAuto
// 2.1 Creá una Variable llamada miAuto y asignale un Objeto vacío.

let miAuto = {}


// 2.2 Asignale a miAuto una Propiedad marca, que a su vez contenga un String.
miAuto.marca = "Honda";

// 2.3 Agregá una Propiedad año que contenga un número entero.
miAuto.año = 2018;

// 2.4 Agregá una Propiedad nuevo que contenga un booleano.
miAuto.nuevo = false;

// 2.5 Creá una Variable llamada propertyKey y asignale el String "modelo"
var propertyKey = "modelo";

// 2.6 Agregá la Propiedad modelo al Objeto miAuto.
miAuto[propertyKey] = "Civic EX-L";

// 2.7 Creá una Variable llamada anotherPropertyKey y dale el Valor "precio".
var anotherPropertyKey = "precio";

// 2.8 Cuantificá el Valor de tu auto.
miAuto[anotherPropertyKey] = 18000;

// 2.9 Asigná la String "color" a una Variable nueva llamada nextProperty.
var nextProperty = "color";

// 2.10 Usá la variable nextProperty para añadir el color a tu auto.
miAuto[nextProperty] = "Blanco";


// 2.11 Usá el loop for...in para iterar sobre el Objeto miAuto y que muestre en la consola el key y el value de cada Propiedad.
for ( var key in miAuto) {
    if ( miAuto.hasOwnProperty(key)) {
console.log("Propiedad: " + key + "    Valor: " + miAuto[key]);
    }
}



//Para Pensar...
//¿Qué devuelve miAuto[propertyKey]?
//   'Civic EX-L'   

//¿Qué devuelve miAuto["modelo"]?
//    'Civic EX-L'  

//¿Qué devuelve miAuto[nextProperty]?
//      'Blanco'

//¿Qué devuelve miAuto["color"]?
//      'Blanco'