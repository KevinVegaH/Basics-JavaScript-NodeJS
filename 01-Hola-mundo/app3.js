// Non Blocking I/O  --> Entradas y salidas que no bloquean.

console.log('Inicio del programa');

setTimeout(function() {
    console.log('Primer Timeout');
}, 3000);
setTimeout(function() {
    console.log('segundo Timeout');
}, 0);
setTimeout(function() {
    console.log('Tercer Timeout');
}, 0);

console.log('Fin del programa');