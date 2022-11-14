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

// llamar numero veces a la funcion  fn
function serie(n, fn, callbackFinalizacion) {
    if (n == 0) { //cuando llegue a 0 termina. primero vale 5, es igual a 0 no, pasamos a siguiente
        callbackFinalizacion(); //cuando n es igual a 0, se imprime fin
        return; //termino
    }
    n = n -1; // primero vale 5, le restamos 1 vale 4, siguiente
    fn('texto' + n, () => { //texto + n (4)
        serie(n, fn, callbackFinalizacion); // imprime texto4 y vuelta a empezar
    })
}

serie(5, escribeTras2Segundos, () => { //callback de finalizacion llama aqui a esta funcion
    console.log('fin');
});



 

// se imprime:
// empiezo (espera 2 seg) texto1(espera2 seg) texto2 y fin



