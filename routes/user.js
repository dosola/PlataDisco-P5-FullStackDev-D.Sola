const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');
const Album = require('../models/albums');
const { default: swal } = require('sweetalert');



// Crear User                              // Verificado OK !
router.post('/user', async function(req, res) {
        nuevoUser = new User (req.body);
        await nuevoUser.save();
        res.send('Nuevo User Creado');
});



module.exports = router;


