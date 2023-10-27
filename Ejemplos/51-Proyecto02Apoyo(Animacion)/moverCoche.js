"use strict";

var desplazaFondoUno = 0;

const fondoUno = document.getElementById("fondoUno");
const fondoDos = document.getElementById("fondoDos");

const longimg = 450;

let desplazamiento = 20;
let tiempo = (1 / 60) * 1000;

var velocidad = desplazamiento / tiempo;

/**
 * Moves the background images to create the illusion of the car moving.
 * @function
 * @returns {void}
 */
function desplazar() {
    desplazaFondoUno -= desplazamiento;
    let desplazaFondoDos = desplazaFondoUno + longimg;
    fondoUno.style.left = desplazaFondoUno + "px";
    fondoDos.style.left = desplazaFondoDos + "px";
}

/**
 * Resets the background images to their initial position.
 * @function
 * @returns {void}
 */
function repetir() {
    fondoUno.style.left = "0px";
    fondoDos.style.left = "450px";
    desplazaFondoUno = 0;
}

setInterval(desplazar, tiempo); // 50ms = 0.05s. Si cada 0.05s desplazo 10px, cada 2,25s desplazo todo el fondo
setInterval(repetir, (longimg / desplazamiento) * tiempo); // Esto quiere decir que cada 2250ms tengo que volver a repetir el proceso
