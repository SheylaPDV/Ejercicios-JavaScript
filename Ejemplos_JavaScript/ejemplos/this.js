'use strict';

// uso de this

//  creamos un constructor sdde objetos

function Fruta (nombre) {
    this.nombre = nombre;
    //metodo
    this.saluda = function () { // si usamos una arrow fuction, no se perderia el this
        console.log('Hola, soy', this.nombre); // este this es el que podemos perder
    }

} // al llamar con new, devuelve el objeto que haya en this

const limon = new Fruta('limon');
// console.log(limon);
//  donde esten los () de ejecucion
// this sera: ,de derecha a izquierda lo que hay despues del primer punto
// limon.saluda();

// asi perdemos el this
const saludador = limon.saluda;
// saludador();

// asi nos aseguramos de que lo tiene
saludador.bind(limon)();

setTimeout(limon.saluda.bind(limon), 2000);