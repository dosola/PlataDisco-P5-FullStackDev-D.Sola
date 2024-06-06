
// *** Ej02   2- Base De Datos De Películas
// En este ejercicio, deberás crear un Arreglo llamado películas, que 
// tenga -por cada película- un Objeto con las siguientes Propiedades:
// titulo - rating - loHasVisto
// Usá un for loop para iterar sobre el Arreglo e imprimir un resultado 
// en la consola que se vea como esto:

//Viste "Busqueda implacable" - 5 estrellas   
//No viste "Norbit" - 3 estrellas  
//Viste "Mini espías" - 2 estrellas  
//No viste "La vida es bella" - 5 estrellas
//🎬 ¡Podés usar tus propias películas!


const peliculas = [
    { titulo: "Busqueda implacable", rating: 5, loHasVisto: true },
    { titulo: "Norbit", rating: 3, loHasVisto: false },
    { titulo: "Mini espías", rating: 2, loHasVisto: true },
    { titulo: "La vida es bella", rating: 5, loHasVisto: false }
];


// Iterar resultado
for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
    const visto = pelicula.loHasVisto ? "Viste" : "No viste";
    console.log(`${visto} "${pelicula.titulo}" - ${pelicula.rating} estrellas`);
}