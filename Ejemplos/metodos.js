console.log("--------------------------");
console.log("SUBSTRING");

let string = "JavaScript";
console.log(string.substr(5, 5));

console.log("--------------------------");
console.log("SPLIT");
// . *split()*: El método split divide una cadena en un lugar específico.

let string2 = "30 Days Of JavaScript";
console.log(string2.split()); // Cambios en una matriz -> ["30 Days Of JavaScript"]
console.log(string2.split(" ")); // Dividir a una matriz en el espacio -> ["30", "Days", "Of", "JavaScript"]
console.log(string2.split("")); // Dividir a una matriz en el espacio -> ['3', '0', ' ', 'D', 'a','y', 's', ' ', 'O', 'f',' ', 'J', 'a', 'v', 'a','S', 'c', 'r', 'i', 'p','t']

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split(",")); // Dividir en cualquier matriz en coma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

console.log("--------------------------");
console.log("TRIM");
// *trim()*: Elimina el espacio final al principio o al final de una cadena.

let string3 = "   30 Days Of JavaScript   ";
console.log(string3);
console.log(string3.trim(" "));
let firstName = " Asabeneh ";
console.log(firstName);
console.log(firstName.trim()); // todavía elimina espacios al principio y al final de la cadena

console.log("--------------------------");
console.log("INCLUDES");
// *includes()*: Toma un argumento de subcadena y verifica si existe un argumento de subcadena en la cadena. *includes()* devuelve un valor booleano. Si existe una subcadena en una cadena, devuelve verdadero; de lo contrario, devuelve falso.

let string4 = "30 Days Of JavaScript";
console.log(string4.includes("Days")); // verdadero
console.log(string4.includes("days")); // falso: ¡se distingue entre mayúsculas y minúsculas!
console.log(string4.includes("Script")); // verdadero

console.log("--------------------------");
console.log("REPLACE");
// *replace()*: toma como parámetro la subcadena antigua y una nueva subcadena.

let string5 = "30 Days Of JavaScript";
console.log(string5.replace("JavaScript", "Python")); // 30 Days Of Python

console.log("--------------------------");
console.log("CHARAT");
// *charAt()*: Toma índice y devuelve el valor en ese índice

let string6 = "30 Days Of JavaScript";
console.log(string6.charAt(0)); // 3
let lastIndex = string6.length - 1;
console.log(string6.charAt(lastIndex)); // t

console.log("--------------------------");
console.log("charCodeAt");
// charCodeAt()*: Toma el índice y devuelve el código char (número ASCII) del valor en ese índice

let string7 = "30 Days Of JavaScript";
console.log(string7.charCodeAt(3)); // D ASCII numbero es 68

console.log("--------------------------");
console.log("indexOf");
// indexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena; si no existe, devuelve -1

let string8 = "30 Days Of JavaScript";
console.log(string8.match("Days"));

console.log(string8.indexOf("D")); // 3
console.log(string8.indexOf("Days")); // 3
console.log(string8.indexOf("days")); // -1

console.log("--------------------------");
console.log("lastIndexOf");
console.log(string.repeat(8));
// lastIndexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la última posición de la subcadena; si no existe, devuelve -1

const desafio = "30 dias de JavaScript";
console.log(desafio);
console.log(desafio.length);
const desafio1 = desafio.toUpperCase();
console.log(desafio1);
const desafio2 = desafio.toLowerCase();
console.log(desafio2);
console.log(desafio.substring(2, 0));
console.log(desafio.substring(2));
console.log(desafio.includes("Script"));
console.log(desafio.split());
console.log(desafio.split(" "));
console.log(desafio.replace("JavaScript", "Python"));
console.log(desafio[15].charAt());
console.log(desafio.charCodeAt("J"));
const int = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(int.split(" "));

const PI2 = Math.PI;

// Redondear valor al numero mas cercano
console.log(Math.round(PI2));
// Redondear hacia abajo
console.log(Math.floor(PI2));
// Redondear hacia arriba
console.log(Math.ceil(PI2));
// Devuelve el valor minimo
console.log(Math.min(-5, 2, 55, 7, 10));
// Devuelve el valor maximo

console.log(Math.max(PI2));

// genera un numero aleatorio entre 0 y 0,999999

const random = Math.random();
console.log(random);

// crea un número aleatorio entre 0 y 10
const num = Math.floor(Math.random() * 11);
console.log(num);

//Valor absoluto
console.log(Math.abs(-10)); // 10

//Raíz cuadrada
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Poder
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logaritmo
// Devuelve el logaritmo natural con base E de x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453

console.log(Math.log(10)); // 2.302585092994046

// Devuelve el logaritmo natural de 2 y 10 respectivamente
console.log(Math.LN2); // 0.6931471805599453

console.log(Math.LN10); // 2.302585092994046

// Trigonometría
Math.sin(0);
Math.sin(60);
Math.cos(0);
Math.cos(60);

let randomNum = Math.random(); //  0 a 0.999
let numBtnZeroAndTen = randomNum * 11;
console.log(numBtnZeroAndTen); // esto da: min 0 y max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // esto da entre 0 y 10

// En JavaScript y otros lenguajes de programación \ seguido de algunos caracteres es una secuencia de escape. Veamos los caracteres de escape más comunes:

// -\n: nueva linea
// - \t: Tabulador, significa 8 espacios
// - \\\\: barra invertida
// - \\': Una frase (')
// - \\": comillas dobles (")
