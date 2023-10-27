let username = prompt("Porfavor, introduce tu nombre")
let textField = document.getElementById("textField")

function saludar() {
    textField.innerHTML = "Hola " + username
}

function despedir() {
    textField.innerHTML = "Adios " + username
}