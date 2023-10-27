"use strict"

let operando1_input = document.getElementById("operando1");
let operando2_input = document.getElementById("operando2");

let operando1;
let operando2;

let salida = document.getElementById("salida");

document.getElementById("add").addEventListener('click', function (event) {
    operando1, operando2 = parseNumbers();
    salida.innerHTML = operando1 + operando2;
})

document.getElementById("substract").addEventListener('click', function (event) {
    operando1, operando2 = parseNumbers();
    salida.innerHTML = operando1 - operando2;
})

document.getElementById("multiply").addEventListener('click', function (event) {
    operando1, operando2 = parseNumbers();
    salida.innerHTML = operando1 * operando2;
})

document.getElementById("divide").addEventListener('click', function (event) {
    operando1, operando2 = parseNumbers();
    salida.innerHTML = operando1 / operando2;
})

document.getElementById("getInt").addEventListener('click', function (event) {
    salida.innerHTML = parseInt(operando1_input.value)
})

document.getElementById("getFloat").addEventListener('click', function (event) {
    salida.innerHTML = (operando2_input.value.toString().split(".")[1] != undefined) ? "0." + operando2_input.value.toString().split(".")[1] : 0
})



function parseNumbers() {
    operando1 = parseFloat(operando1_input.value);
    operando2 = parseFloat(operando2_input.value);
    return operando1, operando2;
}

