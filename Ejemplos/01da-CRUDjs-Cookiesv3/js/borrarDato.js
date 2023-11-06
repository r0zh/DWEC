'use strict';

function borrarDato(clave) {
    datos = JSON.parse(localStorage.getItem('localDatos'));
    let newDatos = [];
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].nombre != clave) {
            newDatos.push(datos[i]);
        }
    }
    datos = [...newDatos];
    grabarDato();
}