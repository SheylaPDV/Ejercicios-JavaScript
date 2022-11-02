const oracion =
  "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(oracion.match("porque"));
const pattern = /porque/gi;
console.log(oracion.match(pattern));
