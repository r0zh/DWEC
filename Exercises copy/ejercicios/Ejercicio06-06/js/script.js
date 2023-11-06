"use strict"

const generate = document.getElementById("generate");
const result = document.getElementById("result");
const numMatriculas = document.getElementById("numMatriculas");

let matriculas = [];

generate.addEventListener("click", () => {
    matriculas.length = 0;
    for (let i = 0; i < numMatriculas.value; i++) {
        matriculas.push(generarMatricula());
    }
    mostrarMatriculas();
});

function mostrarMatriculas() {
    let campoMatriculas = document.createElement("div");
    matriculas.forEach(matricula => {
        let campoMatricula = document.createElement("p");
        campoMatricula.classList.add("matricula");
        campoMatricula.innerHTML = matricula;
        campoMatriculas.appendChild(campoMatricula);
    });
    result.replaceChildren(campoMatriculas);
}

function generarMatricula() {
    let matricula = "";
    for (let i = 0; i < 3; i++) {
        matricula += generarLetra();

    }
    matricula += "-";
    for (let i = 0; i < 5; i++) {
        matricula += generarNumero();
    }
    return matricula;
}

function generarLetra() {
    let letra = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(letra);
}

function generarNumero() {
    return Math.floor(Math.random() * 10);
}