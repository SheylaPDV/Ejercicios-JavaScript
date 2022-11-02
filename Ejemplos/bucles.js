let lista = [1, 4, 6, 5, 4, 5, 76, 8];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 8);
}

// For of
for (let valor of lista) {
  console.log(valor);
}

// ForEach
lista.forEach((valor) => {
  console.log(valor);
});

// For in
let persona = {
  nombre: "shey",
  apellido: "Perez",
  edad: 31,
};
for (let propiedad in persona) {
  console.log(propiedad); //nombre, apellido,edad...
  console.log(persona[propiedad]); // nombre:"shey", edad: 34....., (con propiedad: accedes a los valores solo)
}

// Bucles while
// while
let i = 0;
let max = 10;
while (i < max) {
  console.log(i);
  i++;
}
i = 0;

// do while(siempre hace la primera ejecucion)
do {
  i++;
} while (i < max);

// Casos muy especificos - break, continue

let list = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < list.length; i++) {
  if (list[i] === 3) {
    continue;
  }
  console.log(list[i]);
  if (lista[i] > 5) {
    break;
  }
}

// labels

let unidad = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidad: while (true) {
    console.log(`El numero actual es: ${decenas}${unidad}`);
    unidad++;

    if (unidad === 10) {
      unidad = 0;
      break bucleUnidad;
    }
    if (decenas === 2) {
      break bucleDecenas;
    }
  }
  decenas++;
}
