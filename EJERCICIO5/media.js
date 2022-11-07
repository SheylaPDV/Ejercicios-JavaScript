// Ejercicio 1, funcion para obtener la media de una lista de numeros.

const media = (list) => {
  let sum = 0;
  let i = 0;

  for (var val of list) {
    sum = sum + val;
    i++;
  }
  const media = Math.round(sum / i);
  console.log(media);
};
media([8, 9, 12]);
