const botonAceptar = document.getElementById("idBtnAceptar");
botonAceptar.addEventListener("click", () => {
    // event.preventDefault();
    const albumId = document.getElementById('albumId').value;
    const trackNumber = document.getElementById('trackNumber').value;
    const songTitle = document.getElementById('songTitle').value;
    const duration = document.getElementById('songDuration').value;
    const url = document.getElementById('songUrl').value;

    const songData = {
        albumId: albumId,
        numero: trackNumber,
        titulo: songTitle,
        duracion: duration,
        ytUrl: url
    };

    // axios.post(`http://localhost:3000/albums/${albumId}/addSong`, songData)
    axios.post(`http://localhost:3000/albums/:id/addSong`, songData)
        .then(response => {
            alert('Canción agregada exitosamente');
        })
        .catch(error => {
            console.error('Hubo un error al agregar la canción:', error);
            alert('No se pudo agregar la canción');
        });
});




