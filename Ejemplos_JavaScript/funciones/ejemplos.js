// FUNCION EN JAVASCRIPT

//  ejemplo 1
function helloWorld () {
    console.log("hello world");
}
// ejemplo 2 (si llamas a la funcion, se ejecutaran los valores siempre por orden, de arriba a abajo)
function helloWorld () {
    console.log("hello world");
    console.log("hola que tal");
    console.log("hola que ase");
}

// ejemplo 3 funcion con parametros
function helloWorld (param1, param2) {
    console.log(param1)
    console.log(param2)
}

// ejemplo 3 funcion con parametros interminables
function helloWorld (...param) {
    console.log(param);
}

// ejemplo 4 funcion con if y else(puede devolver un booleano o una cadena)
function mayorQue (num) {
    if (num > 5) {
        console.log("Verdadero")
        return true;
    }   else if (num > 2) {  ---> seria como un elif en python
        console.log("Mayor que 2")
        return false;
    }
    else {
    return false;  ---> si no ponemos nada, devuelve undefined
    }
}
// cuando metemos variables de tipo let y const dentro de una funcion, estas 2 entienden cuando estan dentro de un bloque {} y aun que fuera de la funcion crees otra variable con el mismo nombre, la de dentro del bloque sigue valiendo lo mismo.
//  si es con var, no detecta que esta dentro de un bloque {}

// Funcion de suma

function sumam(a, b) {
    return a + b;
}
console.log(sum(10)) ------> si a vale 10 y b nada e intenta sumarlo, te da un NaN (not a number)

//  funcion para concatenar cadenas

function contacStrings (a, b) {
    return (a + b);
    return `${a}${b}`;
}
console.log(contacStrings("hello", "world"))

// funcion devolver el numero mas pequeño

function devolverNumero (a, b) {
    if (a < b) {
        return a
    }   else {
        return b
    }
}

//  funcion pura

function multipicar (num1) {
    return num1 * 30;
}
console.log(multipicar(5))