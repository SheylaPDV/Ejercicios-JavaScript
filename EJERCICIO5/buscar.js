// Ejercicio 2 , funcion que busque un numero en una lista y diga si existe

const buscar = (lista, numero) => {
  let list = [];
  for (var num of lista) {
    list = list + num;
  }
  if (list.includes(numero)) {
    console.log(numero, "esta incluido!");
  } else {
    console.log(numero, "No esta incluido...");
  }
};
buscar([1, 4, 55, 6], 55);
