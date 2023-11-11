'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "Los datos almacenados son: <br />";
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
        canalBD.getAll().onsuccess = function (event) {
            let registros = event.target.result;
            for (let registro of registros) {
                let linea = document.createElement("tr"), // creo una fila
                    campoNombre = document.createElement("td"), // creo una celda para el nombre
                    campoClave = document.createElement("td"), // creo una celda para la clave

                    campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                    botonBorrar = document.createElement("button"), // creo un botón
                    imagenBorrar = document.createElement("img"); // creo una imagen

                campoNombre.innerHTML = registro.nombre; // escribo el nombre contenido en el array
                campoClave.innerHTML = registro.edad; // escribo la clave contenida en el array

                botonBorrar.textContent = "Borrar" // etiqueto el botón
                botonBorrar.className = "borrar"; // asigno el botón a una clase
                botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                    borrarDato(registro.id); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                });

                imagenBorrar.src = "./img/delete.svg"; // añado al botón una imagen
                imagenBorrar.width = "22"; // añado al botón los estilos
                imagenBorrar.height = "22";
                imagenBorrar.style = "vertical-align: middle";

                botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
                campoBorrar.appendChild(botonBorrar); // añado el botón a la celda

                linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
                linea.appendChild(campoClave); // añado a la línea la celda con la clave
                linea.appendChild(campoBorrar); // añado a la línea la celda con el botón

                cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea 
            }
        }
    };
}