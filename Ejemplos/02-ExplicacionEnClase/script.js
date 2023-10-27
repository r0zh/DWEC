"use strict"

let persona = "Jose";
//persona = prompt("Escribe un nombre: ");

function saludar() {
    //document.getElementById("salida").innerHTML="Hola " + persona;
    document.getElementById("salida").innerHTML = `Hola ${persona}`;
}

function despedir() {
    //document.getElementById("salida").innerHTML="adios " + persona;
    document.getElementById("salida").innerHTML = `Adios ${persona}`;
}
