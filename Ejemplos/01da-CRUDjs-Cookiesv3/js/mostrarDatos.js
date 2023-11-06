'use strict';

function mostrarDatos() {
    const cuerpo = document.getElementById("cuerpo");
    datos = document.cookie.split(";");

    if (document.cookie && document.cookie.length > 0) { // si hay una estructura y contiene algo
        // En vez de hacer esto hacer un replace
        cuerpo.innerHTML = "Los datos almacenados son: <br />";
        for (let dato of datos) {
            let linea = document.createElement("tr");
            let campoClave = document.createElement("td");
            let campoValor = document.createElement("td");
            let campoBorrar = document.createElement("td");
            let botonBorrar = document.createElement("button");
/*             let botonBorrar = document.createElement("input"); */
            let imagenBorrar = document.createElement("img");

            const [clave, valor] = dato.split("=");
            campoClave.innerHTML = clave;
            campoValor.innerHTML = valor;

/*             botonBorrar.type = "button";
            botonBorrar.value = "Borrar"; */
            botonBorrar.innerHTML = "Borrar";
            botonBorrar.addEventListener("click", function () {
                borrarDato(clave);
            })

            imagenBorrar.src = "./img/delete.svg";
            imagenBorrar.width = "22";
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";

            linea.appendChild(campoClave);
            linea.appendChild(campoValor);
            campoBorrar.appendChild(botonBorrar);
            campoBorrar.appendChild(imagenBorrar);            
            linea.appendChild(campoBorrar);

            cuerpo.appendChild(linea);
        }
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
}