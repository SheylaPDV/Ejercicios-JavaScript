'use strict';

const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
    console.log('Error de conexion a MongoDB', err);//mustra error si no se coneca bien
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en la BD:', mongoose.connection.name);//mensaje de conectado
})

mongoose.connect('mongodb://localhost/cursonode'); // esto conecta con la base de datos, si no existe la crea


//opcional
module.exports = mongoose.connection;
