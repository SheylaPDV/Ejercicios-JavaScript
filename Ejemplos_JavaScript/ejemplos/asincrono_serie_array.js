'use strict';

console.log('empiezo');
//  funcion que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) { //funcion iteradora se llama
    setTimeout(() => {
        console.log(texto);
        //hemos terminado, llamamos al callback
        callback();
    }, 2000)
}

// llamar a la funcion fn con cada elemnto del array arr
function serie(arr, fn, callbackFinalizacion) {
    if (arr.length == 0) { 
        callbackFinalizacion(); 
        return; 
    }
   
    fn('texto' + arr.shift()/*elimina el primer elemnto del array y lo devuelve*/, () => { 
        serie(arr, fn, callbackFinalizacion); 
    })
}

serie([1,2,3,4,5], escribeTras2Segundos, () => {
    console.log('fin');
});



 

// se imprime:
// empiezo (espera 2 seg) texto1(espera2 seg) texto2 y fin



