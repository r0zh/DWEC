"use strict"

// Define a variable to hold the name input by user
let nombre;

// Function to save the user input name
function guardar() {
    nombre = document.getElementById("nombre").value;
}

// Function to greet the user
function saludar() {
    salida.innerHTML = `¡Hola, ${nombre}!`;
}

// Function to bid farewell to the user
function despedir() {
    salida.innerHTML = `¡Adios, ${nombre}!`;
}


// Event listener to setup greeting and farewell messages when window loads
window.addEventListener('load', function () {
    let salida = document.getElementById("salida");
    // Add event listener to greet user upon clicking
    document.getElementById("saluda").addEventListener("click", saludar);
    // Add event listener to bid farewell to user upon clicking
    document.getElementById("despide").addEventListener("click", despedir);
});

