"use strict"

function parando() {
    clearInterval(repite);
    document.getElementById("salidaRepite").innerHTML += "Espera finalizada... <br />";
}

function esperandoOtraVez() {
    document.getElementById("salidaRepite").innerHTML += `<pre> Han pasado otros: ${lapso / 1000}sg.</pre> <br />`;
}

function repitiendoEspera() {
    document.getElementById("salidaRepite").innerHTML = "Repitiendo espera 2sg... <br />";
    repite = setInterval(esperandoOtraVez, lapso); // Comienza la espera repetida de 5sg, ejecutando la funcion 'esperandoOtraVez'
}

function esperando() {
    document.getElementById("salidaEspera").innerHTML += `<pre> Han pasado: ${lapso / 1000}sg.</pre> <br />`;
    document.getElementById("salidaEspera").innerHTML += "Estoy listo para repetir el proceso <br />";
    let botones = document.getElementsByClassName("boton");
    for (let boton of botones) {
        boton.style.visibility = "visible";
    }
}

let espera, repite;

let botones = document.getElementsByClassName("boton");

for (let boton of botones) {
    console.log(boton);
    boton.style.visibility = "hidden";
}
/*
for (let i=0; i<botones.length; i++) {
    console.log(botones[i]);
    botones[i].style.visibility = "hidden";
}
*/

document.getElementById("repetir").addEventListener("click", repitiendoEspera);
document.getElementById("parar").addEventListener("click", parando);

let lapso = 2000; // 2sg = 2000ms
document.getElementById("salidaEspera").innerHTML = "Esperando 2sg... <br />";
espera = setTimeout(esperando, lapso); // Comienza la espera de 2sg, luego se ejecuta la funcion 'esperando'

