"use strict"

console.log("--------------------------------");
console.log("---------- Math.rand() ---------");
console.log("--------------------------------");
console.log("----Entre 0 y 9-----------------");
// Función aleatoria entre 0 y 9
let aleatorio = Math.random();
console.log(aleatorio);

console.log("--- Entre 0 y 10 (exclusivo) ---");
// Valor aleatorio hasta 10
console.log(Math.floor(aleatorio * 10));

console.log("--- Entre 0 y 10 (inclusivo) ---");
// Rango aleatorio hasta 10
// Usa la acumulación del segundo decimal
console.log(Math.floor(aleatorio * 11));

console.log("--- Entre 0 y 100 (exclusivo) ---");
// Rango aleatorio hasta 100
console.log(Math.floor(aleatorio * 100));

console.log("--- Entre 0 y 100 (inclusivo) ---");
// Rango aleatorio hasta 100
// Usa la acumulación del segundo decimal
console.log(Math.floor(aleatorio * 101));

console.log("--- Entre 1 y 10 (exclusivo) ---");
// Valor aleatorio desde 1
console.log(Math.floor(aleatorio * 10) + 1);

console.log("--- Entre 1 y 100 (exclusivo) ---");
// Rango aleatorio desde 1
// Usa la acumulación del segundo decimal
console.log(Math.floor(aleatorio * 100) + 1);

console.log("--- Entre min y max (exclusivo) ---");
// Rango aleatorio entre dos valores
let min = 5;
let max = 15;
console.log(Math.floor(aleatorio * (max - min)) + min);

console.log("--- Entre min y max (inclusivo) ---");
// Rango aleatorio entre dos valores
console.log(Math.floor(aleatorio * (max - min + 1)) + min);