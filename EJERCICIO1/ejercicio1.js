const frase =
  "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor";
const frase2 = frase.split(" ");
console.log(frase2);
var indice = 0;
for (var i = 0; i < frase2.length; i++) {
  if (frase2[i] === "amor") {
    console.log("frase", frase2[i]);
    console.log("indice", indice);
    indice++;
  }
}
console.log("La palabra amor aparece:", indice, "veces");
