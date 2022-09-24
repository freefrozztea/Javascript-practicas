const crypto = window.crypto

// Versión vieja
Math.random().toString(36).slice(2)
// Generamos número aleatorio del 0 al 1
// Lo pasamos a String con base 36 - alfanumérico
// Luego le sacamos el '0.', recordar que era un número entre 0 y 1
// Top de compatibilidad

// Versión nueva
crypto.randomUUID()
// Usamos el objeto crypto
// Genera un ID universal único, es un ID de 16 bytes
// Aún no es soportado en todos los navagadores, maldito Safari cof cof
// Top resultado

