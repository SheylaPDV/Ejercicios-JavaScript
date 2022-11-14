'use strict';

//  cargar libreria de express 
const express = require('express');


//  crear la aplicacion
const app = express();

app.use((req, res, next) => {
    console.log('recibo una peticion a', req.originalUrl);
    next();
})

//  ponemos metodos de la aplicacion
app.get('/', (req, res, next) => {
   
    res.send('hola');
})

// middleware
app.get('/pepe', (req, res, next) => {
    res.send('soy pepe');
})

app.get('/luis', (req, res, next) => {
    res.send('soy luis');
})

// arrancamos la aplicacion
app.listen(8080, () => {
    console.log('Servidor HTTP arrancado en http://localhost:8080');
})