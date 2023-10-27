"use strict"

let nombre;

function guardar() {
    nombre = document.getElementById("nombre").value;
}

let salida = document.getElementById("salida");

function saludar() {
    salida.innerHTML = `¡Hola, ${nombre}!`;
}

function despedir() {
    salida.innerHTML = `¡Adios, ${nombre}!`;
}