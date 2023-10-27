let textField = document.getElementById("textField")
let nombre;

function guardar() {
    nombre = document.getElementById("nombre").value
    nombre.style.width = "200px";
}

function saludar() {
    textField.innerHTML = "Hola " + nombre
}

function despedir() {
    textField.innerHTML = "Adios " + nombre
}