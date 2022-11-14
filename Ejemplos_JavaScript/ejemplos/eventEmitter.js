'use strict';

const EventEmitter = require('events');

// creamos un emisor de eventos
const emisor = new EventEmitter();

// nos suscribimos a eventos
emisor.on('llamada de telefono', (quien) => { 
    if (quien === 'madre') return; //on emite todas las veces
    console.log('ring ring');
});

emisor.once('llamada de telefono', (quien) => { //once solo emite una sola vez
    console.log('brrr brrr');
});
// emitimos eventos

emisor.emit('llamada de telefono', 'madre'); //el segundo parametro madre, lo reciben en el arrow function
