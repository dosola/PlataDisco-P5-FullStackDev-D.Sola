
// *** Lista de Súper - Parte I 
// Instanciá un Arreglo y guardalo en la variable listaDeSuper.
var listaDeSuper = [];
// 2
// Agregá los productos que tenés que comprar.
listaDeSuper[0] = "sal";
listaDeSuper[2] = "azucar";
listaDeSuper[3] = "café";
listaDeSuper[4] = "queso";
listaDeSuper[5] = "tostadas";
// 3
// Accedé al primer elemento de tu lista.
console.log(listaDeSuper[0]);
// 4
// Creá una Variable llamada ultimoElemento. El valor de esta Variable
// tiene que ser un número que indique la posición del último elemento.
let ultimoElemento = (listaDeSuper.length);
// 5
// Accedé a ese último elemento usando la variable ultimoElemento.
console.log(listaDeSuper[ultimoElemento]);

// ------------------------------------------------------------- 


// ***   Lista de Súper - Parte II

// 2.1   Agregá dos nuevos productos al final de la lista.
listaDeSuper.push("cerveza");
listaDeSuper.push("pañales_RN");

// 2.2   Agregá dos productos al principio de tu lista.
listaDeSuper.unshift("vino");
listaDeSuper.unshift("queso_rallado");

// 2.3   Determiná cuán largo es el Arreglo en este momento. **9**
console.log(listaDeSuper.length -1);

// 2.4   Sacá un producto y guardalo en una Variable que se llame noHabia.
let noHabia = listaDeSuper.pop(5);

// 2.5   Sacá un producto y guardalo en otra Variable que se llame comprado.
let comprado = listaDeSuper.pop(0);

// 2.6   ¿Cuán largo es el Arreglo ahora?   **7**
console.log(listaDeSuper.length -1);
