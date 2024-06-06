
// *** EJ2- Desafío + 27 🎂
// Tenemos un Arreglo de Objetos, donde cada uno representa a una persona. 
// Usando .filter(), creá un nuevo Arreglo con las personas que tengan 
// más de 27 años.

let personas = [
  { nombre: "Ana", edad: "28" },
  { nombre: "María", edad: "24" },
  { nombre: "José", edad: "31" },
];


const personasConMasDe27 = personas.filter(persona => persona.edad > 27);
console.log(personasConMasDe27);