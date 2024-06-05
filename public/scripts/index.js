// Unidad 08 - Dom - Saludo personalizado
// https://pledu.plataforma5.la/javascript-full-stack-para-principiantes/08---dom/ejercicio-037bdb2e

// let nombre = prompt("Cuál es tu nombre?");
// const span = document.querySelector("#welcome");

// if (nombre.length < 2) {
//   nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
// }
// span.textContent = "Hola, " + nombre;



// unidad 09 1. Say your Name Remix
//https://pledu.plataforma5.la/javascript-full-stack-para-principiantes/09---loops-y-while-/ejercicios-7e9b755d

// let nombre = prompt("Cuál es tu nombre?");
// if ( nombre == null) {
//   nombre = "anónimo"
// } else {
//   nombre = nombre.toUpperCase();
// }

// while (nombre.length < 3) {
//   nombre = prompt(
//     "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
//   )
// }
// const span = document.getElementById("welcome");
// span.textContent = `Hola, ${nombre}`;
// const itkt = document.querySelector(".iTicket");
// itkt.setAttribute("class", "bi bi-ticket-perforated-fill");



/// Unidad 12   .2 Favoritos
//Deberás crear una función que tome por parámetro un array
//con tus discos favoritos y luego añada a los mismos una estrella.
// const favoriteRecords = ["album1"];






//  * * * * * * * * * * * * * * * * * * UNIDAD 19 - AXIOS
//https://pledu.plataforma5.la/javascript-full-stack-para-principiantes/19---axios/get---mostrar-albums-e0cc1d3c



async function getAlbums() {
  try {
      const response = await axios.get('/Albums');
      for (let key in response.data) {
      console.log(key);
      renderAlbums(response.data[key]);
    }
     swal("Éxito!... ", "los albums se cargaron correctamente.","success")
  } catch(error) {
    console.error('Error al cargar los albums... ', error);
    swal({
      title: 'Error!',
      text: error.response.data,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    redirect('./index.html')
  }
}
window.onload = getAlbums;





function addFavorites(favorites) {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    if (favorites.includes(img.getAttribute ('name'))) {
      const icon = document.createElement('i');
      icon.classList.add('bi bi-star-fill');
      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");

    }
  });
}

// addFavorites (favoriteRecords)




const renderAlbums = (album) => {
  const divgal = document.getElementById("idDivGaleria");
  
  
  const divalbum = document.createElement('div')
  divalbum.classList.add("classdivalbum", "mt-10", 'mb-10', 'ml-10', 'mr-10', 'text-center');
  
  
  const h1 = document.createElement('h1');
  h1.classList.add('text-white', 'font-bold', 'mb-5')
  h1.textContent = album.titulo_album;
  

  const img = document.createElement('img')
  img.src= album.portada ? album.portada : ' http://imgur.com/0uSALUr.png';
  img.alt = `Portada de ${album.descripcion}`;
  img.style.width = '300px';
  img.style.height = '300px';
  img.classList.add('rounded','cursor-pointer')
  
  const p = document.createElement('p');
  p.classList.add('text-white','text-center', 'mt-5');
  p.textContent = album.anioLanzamiento;

  const link = document.createElement('a');
// linea que muestra la info cruda de la SB en pantalla
  // link.href = `./Albums/albums/${album._id}`; // Ajusta la URL de acuerdo a tu estructura

  link.href = `http://localhost:3000/album.html?album=${album._id}`;
  
  //link.href = `./album.html?album=${album._id}`; // Ajusta la URL de acuerdo a tu estructura

  link.appendChild(img);
  
  
  
  divalbum.appendChild(h1)
  divalbum.appendChild(link)
  divalbum.appendChild(p)
  divgal.appendChild(divalbum);




}



