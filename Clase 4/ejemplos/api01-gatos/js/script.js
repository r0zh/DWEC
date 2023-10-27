"use strict"

let cargar = document.getElementById("cargar");
console.log(cargar);
cargar.addEventListener("click", () => {
    let url = "https://meowfacts.herokuapp.com/";
    carga(url);
}); //¿REFACTORIZAMOS?

const salida = document.getElementById("salida");