"use strict"

const generate = document.getElementById("generate");
const result = document.getElementById("result");
const platesNum = document.getElementById("platesNum");

let plates = [];

generate.addEventListener("click", () => {
    plates.length = 0;
    for (let i = 0; i < platesNum.value; i++) {
        plates.push(generatePlate());
    }
    displayPlates();
});