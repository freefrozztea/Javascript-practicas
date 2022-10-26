const tieneRepetidos = arr => {
  return new Set(arr).size < arr.length;
}

console.log(tieneRepetidos([1, 2, 3]));
console.log(tieneRepetidos([1, 2, 1]));
console.log(tieneRepetidos(["Messi", "Mbappe", "Neymar", "Messi"]));