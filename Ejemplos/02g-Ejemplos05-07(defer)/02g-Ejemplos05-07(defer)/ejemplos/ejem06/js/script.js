"use strict"

window.addEventListener('load', function () {
    function saludar() {
        salida.innerHTML = `¡Hola, ${person}!`;
    }

    function despedir() {
        salida.innerHTML = `¡Adios, ${person}!`;
    }

    let person = prompt("Please enter your name", "Por ejemplo, 'Harry Potter'");
    let salida = document.getElementById("salida");
    
    document.getElementById("saluda").addEventListener("click", saludar);
    document.getElementById("despide").addEventListener("click", despedir);
});