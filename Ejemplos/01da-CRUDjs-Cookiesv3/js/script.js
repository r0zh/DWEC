'use strict'
let datos = [];
mostrarDatos();
const nombre = document.getElementById("clave");
const edad = document.getElementById("valor");
const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
    grabarDato(nombre.value, edad.value);
});
const borrar = document.getElementById("borrar");
borrar.addEventListener("click", function () {
    borrarDato(nombre.value);
});
