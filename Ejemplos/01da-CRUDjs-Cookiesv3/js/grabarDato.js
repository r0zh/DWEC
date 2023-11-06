'use strict';

function grabarDato(nombre, edad) {
    datos = JSON.parse(localStorage.getItem('localDatos'));
    datos.push({
        nombre: nombre,
        edad: edad
    })
    grabarDato();
}

function grabarDato() {
    localStorage.setItem('localDatos', JSON.stringify(datos));
    mostrarDatos();
}