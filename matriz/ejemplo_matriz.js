const array = [3, 2, 56, 8, 5, 1, 7, 345, 6];
var min = array[0];
var max = array[0];

for (i = 0; i < array.length; i++) {
  media = array[i] / array.length;
  if (array[i] < min) {
    min = array[i];
  }
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(
  "el numero menor es:",
  min,
  "el numero mayor es:",
  max,
  "la media",
  media
);
