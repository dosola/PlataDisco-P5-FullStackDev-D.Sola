const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const path = require('path');
const routes = require('./routes');
const cors = require('cors');


mongoose.connect('mongodb+srv://seodanielsola:DZAr5kRYuJe7iXZT@cluster0.ga0x2sd.mongodb.net/PlataDisco?retryWrites=true&w=majority&appName=Cluster0')
    .then(function (db) {
        console.log('...  Conetado A MONGO  DB  ...');
    })
    .catch(function (err) {
        console.log(err)
    });



app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);



app.listen(PORT, () => {
    console.log('Server iniciado en puerto ' + PORT);
})