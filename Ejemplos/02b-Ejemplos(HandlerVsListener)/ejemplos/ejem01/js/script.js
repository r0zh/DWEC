"use strict"

function inicio() {
    function saludar() {
        salida.innerHTML = `¡Hola, ${person}!`;
    }

    function despedir() {
        salida.innerHTML += ` ¡Adios, ${person}!`;
    }

    let person = prompt("Please enter your name", "Jota");
    let salida = document.getElementById("salida");

    const manejador = document.getElementById("manejador");
    manejador.onclick = function () {
        saludar();
    };

    manejador.onclick = function () {
        despedir();
    };

    const escuchador = document.getElementById("escuchador");
    escuchador.addEventListener("click", function (event) {
        saludar();
    })

    escuchador.addEventListener("click", function (event) {
        despedir();
    })
}
window.onload = inicio;