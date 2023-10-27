"use strict"

const razas = document.getElementById("razas");
razas.addEventListener("change", () => {
    carga(url);
});

const cargar = document.getElementById("cargar");
cargar.addEventListener("click", () => {
    carga(url);
});

const imagen = document.getElementById("imagen");