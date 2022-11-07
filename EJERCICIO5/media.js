// Ejercicio 1, funcion para obtener la media de una lista de numeros.

const media = (list) => {
  let sum = 0;

  for (var val of list) {
    sum = sum + val;
  }
  const media = Math.round(sum / list.length);
  console.log(media);
};
media([8, 9, 12, 6, 4, 99]);
