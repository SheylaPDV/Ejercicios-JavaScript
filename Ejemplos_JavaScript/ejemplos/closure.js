'use strict';

// una funcion que retorna otras funciones, no pierde el contexto

function creaCoche(numRuedas) {

    const tipoMotor = 'electrico';

    return {
        cuantasRuedasTengo: function() {
            console.log(numRuedas)
        },
        queTipoMotor: () => {
            console.log(tipoMotor);
        }
    }
}

const coche = creaCoche(4);

coche.cuantasRuedasTengo();
coche.queTipoMotor();

setTimeout(coche.cuantasRuedasTengo, 2000); 