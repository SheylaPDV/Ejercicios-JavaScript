console.log('soy un modulo y acabo de cargarme en memoria y ejecutarme');

//lo que meta en module.exports sera lo que devuelva require
module.exports.suma = function (a, b) {
    return a + b;
};

module.exports.resta = function(a, b) {
    return a - b;
}