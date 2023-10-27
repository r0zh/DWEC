"use strict"

let nombre;

function guardar() {
    nombre = document.getElementById("nombre").value;
    saludar()
}

function saludar() {
    let salida = document.getElementById("salida");
    salida.innerHTML = `¡Hola, ${nombre}!`;
}