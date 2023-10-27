"use strict"

// Get the text element from the DOM
let textElement = document.getElementById("texto");
let text;
// Get the output element from the DOM
let salida = document.getElementById("salida");

document.getElementById("load_text").addEventListener('click', (event) => {
    text = textElement.value;
})

// Add event listener to transform_btn elements
Array.from(document.getElementsByClassName("transform_btn")).forEach((button) => {
    button.addEventListener('click', (event) => {
        textElement.value = transform(text, event.target.value);
    })
})

// Add event listener to rnd_btn elements
Array.from(document.getElementsByClassName("rnd_btn")).forEach((button) => {
    button.addEventListener('click', (event) => {
        random(text, event.target.value);
    })
})

document.getElementById("load_joke").addEventListener('click', () => {
    mostrarJoke();
})