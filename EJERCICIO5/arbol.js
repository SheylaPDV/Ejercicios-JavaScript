// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
// const carta = "bici coche balón _playstation bici coche peluche";
// const cartaSeparada = carta.split(" ");
// const final = cartaSeparada.filter((play) => play != "_playstation");
// console.log(final);
// const resultado = final.reduce(
//   (prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev),
//   {}
// );

// COMPLETADO

const arbol = (altura) => {
  let asterisco = "";
  let arbol = "";

  for (fila = 0; fila < altura; fila++) {
    for (k = 0; k <= altura + 2; k++) {
      asterisco = asterisco + "_";
      if (k >= altura / 2 && k === altura / 2) {
        asterisco = asterisco + "*";
      }
    }

    arbol = arbol + asterisco + "\n";
    asterisco = "";
  }

  console.log(arbol);
};
arbol(6);
