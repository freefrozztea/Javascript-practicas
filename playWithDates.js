// Un modo de hacerlo
const date = new Date()
let dateAR = ('0' + date.getDate()).slice(-2) + '/'+ ('0' + (date.getMonth()+1)).slice(-2) + '/'+ date.getFullYear();
console.log(dateAR);

// Un modo más fácil
const newDate = new Date().toLocaleDateString('es-AR');
console.log(newDate);

// -------------------------------

let testDate = new Date().toISOString().slice(0, 10);
console.log(testDate);