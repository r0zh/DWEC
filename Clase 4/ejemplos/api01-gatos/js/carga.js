"use strict"

async function carga(url) {
    let resultado = await solicitud(url);
    mostrar(resultado);
}

