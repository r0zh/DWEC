"use strict";

const resultado = document.getElementById("resultado");
console.log({resultado});
console.log(resultado.innerHTML);
resultado.innerHTML = "Hola <strong>Mundo</strong> <code>cruel</code>!...";

'funcion que borra la pagina entera y muestra una imagen de un gatito'
function borrarPagina() {
    window.location.reload();
}