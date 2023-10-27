"use strict"

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let salida1 = document.getElementById("salida1")
let salida2 = document.getElementById("salida2")

Array.from(document.getElementsByClassName("decToBase")).forEach((button) => {
    button.addEventListener('click', (event) => {
        if (validateBase(num2.value, event.target.value)) {
            convertToBase(parseInt(num1.value), event.target.value)
        }
    })
})

Array.from(document.getElementsByClassName("baseToDec")).forEach((button) => {
    button.addEventListener('click', (event) => {
        if (validateBase(num2.value, event.target.value)) {
            convertFromBase(num2.value, event.target.value)
        }
    })
})

function convertToBase(num, base) {
    salida1.innerHTML = `Resultado en base ${base}: ${num.toString(base)}`;
}

function convertFromBase(num, base) {
    salida2.innerHTML = `Resultado en base 10: ${parseInt(num, base)}`;
}

function validateBase(num, base) {
    const base2 = /^[01]+$/;
    const base8 = /^[0-7]+$/;
    const base16 = /^[0-9A-Fa-f]+$/;
    switch (parseInt(base)) {
        case 2:
            if (base2.test(num)) {
                return true;
            } else {
                alert("Por favor, introduce un número en base 2");
                return false;
            }

        case 8:
            if (base8.test(num)) {
                return true;
            } else {
                alert("Por favor, introduce un número en base 8");
                return false;
            }

        case 16:
            if (base16.test(num)) {
                return true;
            } else {
                alert("Por favor, introduce un núnmero en base 16");
                return false;
            }

        default:
            if (isNaN(parseInt(num))) {
                alert("Por favor, introduce un número válido")
                return false;
            }
            else {
                return true;
            }


    }
}