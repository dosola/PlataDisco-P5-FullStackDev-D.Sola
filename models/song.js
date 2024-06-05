const mongoose = require('mongoose');
const schema = mongoose.Schema;


const songSchema = new schema({
  idAlbum:{
    type: String,
    required: [true, 'El ID de Album es requerido']
  },

  trackNumber:{
      type: Number,
      required: [true, 'El nro de track es requerido']
    },

  songtitulo:{
      type: String,
      required: [true, 'El título es requerido']
    },

  songduration:{
      type: String,
      required: [true, 'La duración es requerida']
    },

  linkYT:{
      type: String,
      required: [true, 'El Link YT es requerido']
    }
  });

  module.exports = mongoose.model('colPDSong', songSchema);


