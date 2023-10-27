"use strict"

// Define options for text transformation
let opciones = ["A-Z", "a-z", "A_", "_Z", "a_", "_z", "AEIOU", "aeiou", "ABC", "abc"];

// Initialize variables for repetition and interval
let repite;
let lapso = 1000;

// Get the length of options array
const opcionesLength = opciones.length;

function random(text, option) {
    switch (option) {
        case "Aleatorio":
            normal(text);
            break;
        case "Parar":
            stopRandom();
            break;
        case "Rápido":
            faster(text);
            break;
        case "Lento":
            slower(text);
            break;
        default:
            break;
    }
}

// Function to start random text transformation
function startRandom(text) {
    stopRandom(); // Clear any existing interval
    repite = setInterval(() => selectRandom(text), lapso);
}

function stopRandom() {
    clearInterval(repite)
}

function normal(text) {
    lapso = 1000;
    startRandom(text)
}

function faster(text) {
    lapso = 200;
    startRandom(text); // Start a new interval with the updated speed
}

function slower(text) {
    lapso = 1800;
    startRandom(text); // Start a new interval with the updated speed
}

// Function to select a random transformation option and apply it to the text
function selectRandom(text) {
    // Transform the text using a random option and update the HTML content of 'salida' element
    textElement.value = transform(text, opciones[Math.floor(Math.random() * opcionesLength)])
}