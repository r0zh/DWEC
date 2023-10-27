"use strict"

let nombre;

function guardar() {
    nombre = document.getElementById("nombre").value;
}


function saludar() {
    let salida = document.getElementById("salida");
    salida.innerHTML = `Hola ${nombre}`;
}

function despedir() {
    document.getElementById("salida").innerHTML = `Adios ${nombre}`;
}
