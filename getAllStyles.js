const elem = document.querySelector('h2');
const cssObj = window.getComputedStyle(elem, null);
// retorna un objeto CSS

// trae un valor css del elemento del objeto
h2Color = cssObj.getPropertyValue('color');
console.log(h2Color);