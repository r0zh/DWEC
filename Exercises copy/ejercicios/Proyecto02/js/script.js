"use strict"

const cargar = document.getElementById("cargar");
const contenido = document.getElementById("contenido");
const loading = document.getElementById("loading");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
// Array to store loaded images to delete them in a future
let loadedImgs = [];
// Variable to store the current image index
let currentImg = 0;

cargar.addEventListener("click", () => {
    removeImages(loadedImgs)
    displayLoading();
    for (let i = 0; i < 10; i++) {
        loadImages(i);
    }
});

next.addEventListener("click", () => {
    let img1 = loadedImgs[currentImg];
    let img2 = loadedImgs[currentImg + 1];
    img2.style.display = "block";
    img2.style.left = "400px";
});

previous.addEventListener("click", () => {
    let loadedImg = document.getElementsByClassName("loaded-img");
    if (loadedImg.length == 10) {
        removeImages(loadedImgs);
        displayLoading();
        for (let i = 0; i < 10; i++) {
            loadImages(i);
        }
    }
});

function removeImages(loadedImgs) {
    loadedImgs.forEach(element => {
        element.parentNode.removeChild(element);
    });
    loadedImgs.length = 0;
}