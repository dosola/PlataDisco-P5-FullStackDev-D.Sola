const getAlbumIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('Album');
};


const getAlbum = async () =>{
    try{
      const response = await axios.get( `/Albums/albums/${albumId}`)
      albumToUse = response.data;
      renderAlbum(albumToUse);

    }
    catch(error){
      swal({
        title: 'Error!',
        text: `${error.response.data}`,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      redirect('./index.html')
    }
  }


// const getAlbum = async (albumId) => {
//         try {
//             // const response = await axios.get(`http://localhost:3000/Albums/albums/${album._id}`);
//             const response = await axios.get(`/Album/${albumId}`);
//             console.log(response);
//             const albumToUse = response.data;
//             renderAlbum(albumToUse);
//             } catch (error) {
//                 console.log(error);
//                 swal({
//                     title: 'Error !',
//                     text: `${error.response.data}`,
//                     icon: 'error',
//                     confirmButtonText: 'Ok'
//                 });
//                 redirect("./index.html");}
//     }

function renderAlbum(album){
    const div = document.getElementById("view-album")
    const h1 = document.createElement('h1')
    h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4','font-bold')
    h1.textContent= album.titulo_album;
    div.appendChild(h1)

    const img = document.createElement('img')
    img.src= album.portada ? album.portada : ' http://imgur.com/0uSALUr.png';
    img.alt = `Portada de ${album.titulo_album}`;
    img.style.width = '500px';
    img.style.height = '500px';
    img.classList.add('rounded','cursor-pointer')
    div.appendChild(img)

    const p = document.createElement('p')
    p.classList.add('text-white', 'mb-4', 'ml-4', 'w-1/2')
    p.textContent= album.descripcion;
    div.appendChild(p)
}

 

// const getAlbum = async () => {
//      try {
//          console.log("TEST - AQUI ESTOY GETEANDO ALBUM...");
//          const urlParams = new URLSearchParams(window.location.search);
//          const albumID = urlParams.get('');
//          console.log("El album ID es... " + albumID);
//          const response = await axios.get('/Album/albums/' + album._id);
//          const albumToUse = response.data;
//          renderAlbum(albumToUse);

//      } catch (error) {
//        swal ({
//          title: `Error!`,
//          text: `${error.response.data}`,
//          icon: `error`,
//          confirmButtonText: 'Ok' 
//        });
//      }
//  }   
 

    
    




//Renderizo canciones
if (Album.songs.length != 0) {
    swal({
        title: 'OPS!... ',
        text: "El album no tiene canciones.",
        // `${error.response.data}`,
        icon: 'warning',
        confirmButtonText: 'Ok'
                    });
renderSongs(album);
}


//Agregar canciones


const redirect = (id) => { window.location.href = `./addSongs.html?album=${id}`}
boton.addEventListener("click", () => redirect(album._id));



document.addEventListener('DOMContentLoaded', function() {
    const albumId = getAlbumIdFromUrl();
    console.log("Album ID from url: ", albumId);
    if (albumId) {
        getAlbum(albumId);
    }
});


function renderSongs(album) {
    const div = document.getElementById("view-album");
    const songList = document.createElement('ol');
    songList.classList.add('list-decimal', 'ml-5');
    
    albun.canciones.forEach((cancion, index) => {
        const songItem = document.createElement('li');
        songItem.classList.add('text-white');

        const songDetails = document.createElement('span');
        songDetails.textContent = `${index + 1}. ${cancion.titulo} - ${cancion.duracion}`;
        songItem.appendChild(songDetails);

        const actions = document.createelement('div');


    });

}


