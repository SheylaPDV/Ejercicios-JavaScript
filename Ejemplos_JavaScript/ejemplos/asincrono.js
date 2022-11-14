'use strict';

console.log('empiezo');
//  funcion que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        //hemos terminado, llamamos al callback
        callback();
    }, 2000)
}

escribeTras2Segundos('texto1', function() {
    escribeTras2Segundos('texto2', function() {
        console.log('fin');
    });
});
// se imprime:
// empiezo (espera 2 seg) texto1(espera2 seg) texto2 y fin



