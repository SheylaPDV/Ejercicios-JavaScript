const problema =
  "Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.";

let regEx = /\d+/g;
const numeros = problema.match(regEx);

const int = Number(numeros[0]) + Number(numeros[2]);
const int2 = int * 12;
const total = int2 + Number(numeros[1]);
console.log("El gana en total al mes:", total);
