const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/users');
const Album = require('../models/albums');
const { default: swal } = require('sweetalert');
router.use(express.json());

//mostrar albums                            //VERIFICADO OK
router.get("/", async function(req, res){
    let albums = await Album.find({});
    res.send(albums);
});

// Crear Album                              // Verificado OK!
router.post('/album', async function(req, res) {
        nuevoAlbum = new Album (req.body);
        await nuevoAlbum.save();
        res.send('Nuevo Album Creado');
});

//Editar Album
// router.put("/album/:id", async function(req,res) {
//     try{
//         console.log("inicio edicion de album")
//         let albumId = req.params.id;
//         let nuevosDatos = req.body;
//         let updatedAlbum = await album.findByIdAndUpdate(albumId, nuevosDatos,{new: true});
//         res.send(updatedAlbum);
//     swal("Éxito!... ","El album se actualizó correctamente.","success")
//     } catch {
//         swal({title: 'Error!',text: error.response.data,icon: 'error',confirmButtonText: 'Ok'})
//     }
// });    
    






//Ver detalles de un album por su ID
router.get('/:id', async function(req, res) {
    let albumId = req.params.id;
    let albumAMostrar = await Album.findById(albumId);
    res.send(albumAMostrar);
})







router.post('/albums/:id/songs', async function(req, res) {
    try {
        let addSong = await Album.findById(req.params.id);
        if(!addSong) {
            res.status(404).send('Álbum No Encontrado');
            return;
        }
        addSong.song.push(req.body);
        await addSong.save();
        res.send('Cancion Agregada Al Album');
    } catch {
        res.status(500).send(error);
    }
});



router.delete('/albums:id/canciones/id:Cancion', async function (req,res) {
        try {
            let delCancion = await delCancion.canciones.id(req.params.idCancion);
            if(!cancion) {
                res.status(404).send('Cancion No Encontrada');
                return;
            }
            delCancion.Canciones.id(req.params.idCancion).remove();
            await delCancion.save();
            res.send('Cancion Eliminada Del Album');
        }   catch {
        res.status(500).send(error);
        } 
});

router.get('/albums/:id', async function(req, res) {
let album = await Album.findById(req.params.id);
    if(!album) {
        res.status(404).send('Álbum No Encontrado');
        return;
    }
res.send(album);
});

router.delete('/albums/:id', async function(req, res) {
    let idAlbum = rew.params.id;
    await Album.findByIdAndDelete(idAlbum);
    res.send('Álbum Eliminado Correctamente');
});

module.exports = router;