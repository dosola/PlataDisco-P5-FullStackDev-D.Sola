const mongoose = require('mongoose');
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Definición del Esquema SIN VALIDACIONES
const userSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: String,
  contrasena: String,
  favoritos: []
});

module.exports = mongoose.model('colPDUser', userSchema);




// //Definición del Esquema   CON   VALIDACIONES *********
// const userSchema = new mongoose.Schema({
//   nombre: String,
//   apellido: String,
//   email: {
//     type: Number,
//     required: true,
//     validate:{
//       validator: function(valEmail){
//         return regexEmail.test(v);
//       },
//       message:'El email ingresado NO es válido.'
//     },
//   },
//   contrasena: String,
//   favoritos: [],
// });

// module.exports = mongoose.model('colPDUser', userSchema);