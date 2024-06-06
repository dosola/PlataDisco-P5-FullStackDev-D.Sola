// *** Ej 4
// Tenemos un Arreglo en una Variable mix con varios 
// elementos, de distintos tipos de datos. Usando .filter(), 
// creá un nuevo Arreglo con todos los elementos que sean 
// Strings y guardalo en la Variable soloStrings.

const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [1, 2, 3],
    'Dolore.'
];

// Usamos el método filter para filtrar los elementos que sean strings
let soloStrings = mix.filter(function(elemento) {
    return typeof elemento === 'string'; 
});

console.log(soloStrings);