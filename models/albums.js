const mongoose = require('mongoose');
const schema = mongoose.Schema;


const albumSchema = new schema({

  titulo_album: {type: String,
    required: [true, 'El titulo de Album es requerido'],
  },
  
  descripcion: {
    type: String,
    required:[true, 'Debe incluir una descipción entre 5 y 200 caracteres...'],
    validator: function(valDescrip){
      return valDescrip.length >= 5 && valDescrip.length <= 200;},
      message:'Debe incluir una descipción entre 5 y 200 caracteres...'
    },

    anioLanzamiento: {type: Number,
      required:[false, 'Debe incluir el año de lanzamiento (mayor a 0)'],
    },
   

    canciones: [{
      titulo_cancion: {type: String},
      duracion: {type: String}
    }],

      
    portada: {type: String},

    favoritos: Array
  });
    
module.exports = mongoose.model('colPDAlbum', albumSchema);





