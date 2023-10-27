"use strict"

function inicio() {
    let person = prompt("Please enter your name", "Por ejemplo, 'Harry Potter'");
    let salida = document.getElementById("salida");
    salida.innerHTML = `¡Hola, ${person}!`;
}
window.onload = inicio;