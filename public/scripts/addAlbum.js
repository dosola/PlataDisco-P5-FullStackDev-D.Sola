const botonAceptar = document.getElementById("idBtnAceptar");

botonAceptar.addEventListener("click", () => {
  const titulo = document.getElementById("idtitulo").value;
  const descripcion = document.getElementById("iddescripcion").value;
  const rutaportada = document.getElementById("idrutaportada").value;
  const lanzamiento = document.getElementById("idlanzamiento").value;

  axios.post("http://localhost:3000/Albums/album", {
    titulo_album: titulo,
    descripcion: descripcion,
    portada: rutaportada,
    anioLanzamiento: lanzamiento,

    // : String,
    // : String,
    // : Number,
    // canciones: [{
    //     titulo_cancion: String,
    //     duracion: String,
    // }],
    //   : String,
    //   favoritos: []
   
  });
  swal("Éxito!... ", "El Album se creó correctamente.","success")
});
