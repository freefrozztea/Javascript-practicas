const jugadores = ["Messi", "Cristiano Ronaldo", "Messi", "Neymar", "Ronaldinho"];

// Usando una colección(set)
const coleccionJugadores1 = [...new Set(jugadores)];
console.log(coleccionJugadores1);

// Usando el método filter
const coleccionJugadores2 = jugadores.filter((item, index) => {
  return jugadores.indexOf(item) === index;
});
console.log(coleccionJugadores2);

