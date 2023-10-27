"use strict"

let persona = "Jose";

function saludar() {
    let salida = document.getElementById("salida");
    salida.innerHTML = `Hola ${persona}`;
}

function despedir() {
    document.getElementById("salida").innerHTML = `Adios ${persona}`;
}
