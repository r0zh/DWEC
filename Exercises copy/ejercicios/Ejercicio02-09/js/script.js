"use strict"

let nombre;

function guardar() {
    nombre = document.getElementById("nombre").value;
}

function saludar() {
    salida.innerHTML = `¡Hola, ${nombre}!`;
}

function despedir() {
    salida.innerHTML = `¡Adios, ${nombre}!`;
}


window.addEventListener('load', function () {
    let salida = document.getElementById("salida");
    document.getElementById("saluda").addEventListener("click", saludar);
    document.getElementById("despide").addEventListener("click", despedir);
});

