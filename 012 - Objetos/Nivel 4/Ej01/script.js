// *** 1- Camino Al Oscar
// Para resolver estos ejercicios repasemos conceptos que nos van a ayudar a resolverlo:
// let greeting = "Hello and welcome!";
// greeting[0]; // "H"
// let words = greeting.split(" ");
// let actoresVocales = [];

// let actoresPrincipales = [
  // "Tom Hanks",
  // "Johnny Depp",
  // "Elizabeth Taylor",
  // "Morgan Freeman",
  // "Jennifer Aniston",
//   "Meryl Streep",
//   "Natalie Portman",
//   "Ashton Kutcher",
// ];
// let peliculas = [];

// let actoresPrincipalesPorPelicula = {
//   Titanic: "Leonardo DiCaprio",
//   "El Padrino": "Al Pacino",
//   Matrix: "Keanu Reeves",
//   "Iron Man": "Robert Downey Jr",
//   "Soy leyenda": "Will Smith",
//   "Bastardos sin gloria": "Brad Pitt",
// };
// Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
// Creá un Objeto vacíó llamado peliculaPorActor.
// Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
// Adaptá tu código para que pueda haber más de una película por cada actor.

let actoresVocales = [];
let actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher'];



// 1.1 Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre 
// o apellido comience con una vocal.
let vocales = ["A", "E", "I", "O", "U"];
actoresPrincipales.forEach(actor => {
    let palabras = actor.split(" ");
    let nombre = palabras[0];
    let apellido = palabras[1];
    if(vocales.includes(nombre[0]) || vocales.includes(apellido[0])){
        actoresVocales.push(actor);
    }
})
let peliculas = []
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
}




// 1.2 Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
// 1.3 Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
for(let propiedad in actoresPrincipalesPorPelicula){
    peliculas.push(propiedad);
    actoresPrincipales.push(actoresPrincipalesPorPelicula[propiedad]);
}



// 1.4 Creá un Objeto vacíó llamado peliculaPorActor.
let peliculaPorActor = {};



// 1.5 Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
for(let propiedad in actoresPrincipalesPorPelicula){
    let pelicula = propiedad;
    let actor = actoresPrincipalesPorPelicula[propiedad];
    peliculaPorActor[actor] = pelicula;
    
    // 1.6  Adaptá tu código para que pueda haber más de una película por cada actor.
peliculaPorActor[actor] = [pelicula];
}