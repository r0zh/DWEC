"use strict";

let buttons = document.getElementsByClassName("button");
let numbers = document.getElementsByClassName("number");

let display = document.getElementById("display");


Array.from(buttons).forEach(element => {
    element.addEventListener("click", function () {
        handleInput(element.textContent);
    })
});