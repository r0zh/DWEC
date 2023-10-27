"use strict"
    function saludar() {
        salida.innerHTML = `¡Hola, ${person}!`;
    }

    function despedir() {
        salida.innerHTML = `¡Adios, ${person}!`;
    }

    let person = prompt("Please enter your name", "Por ejemplo, 'Harry Potter'");
    let salida = document.getElementById("salida");
    
    document.getElementById("recuadro").addEventListener("mouseover", saludar);
    document.getElementById("recuadro").addEventListener("mouseout", despedir);
