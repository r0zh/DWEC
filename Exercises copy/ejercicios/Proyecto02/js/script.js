"use strict"

const loadNew = document.getElementById("loadNew");
const contenido = document.getElementById("contenido");
const loading = document.getElementById("loading");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const auto = document.getElementById("auto");
const options = document.getElementById("options");
// Array to store loaded images to delete them in a future
let loadedImgs = [];
// Variable to store the current image index
let currentImg = 0;

let transitionInProgess = false;
// Variable to store if the order of the images is reversed
let reverse = false;
// Variable to store the transition timeout when automatic transition is enabled
let timeout = 1000;
// Variable to store the transition mode
let mode = document.querySelector('input[name="mode"]:checked').id;

let velocityBtns = document.getElementsByClassName("velocityBtn");

displayImages();

options.addEventListener("change", () => {
    mode = document.querySelector('input[name="mode"]:checked').id;
});


loadNew.addEventListener("click", () => {
    removeImages(loadedImgs)
    displayImages();
});


next.addEventListener("click", () => {
    reverse = false;
    startTransition();
});

previous.addEventListener("click", () => {
    reverse = true;
    startTransition();
});


let autoTransition;

auto.addEventListener('change', function () {
    if (this.checked) {
        autoTransition = setInterval(startTransition, timeout);
    } else {
        clearInterval(autoTransition);
    }
});

function displayImages() {
    displayLoading();
    for (let i = 0; i < 10; i++) {
        loadImages(i);
    }
}

/**
 * 
 * 
 * @returns 
 */
function getImages() {

    let img1 = loadedImgs[currentImg];
    let img2;
    if (reverse) {
        if (currentImg == 0) {
            currentImg = 10;
        }
        img2 = loadedImgs[currentImg - 1];
        img1.style.zIndex = 1;
        img2.style.zIndex = 2;
        currentImg--;
        return { img1, img2 };
    } else {
        if (currentImg == 9) {
            currentImg = -1;
        }
        img2 = loadedImgs[currentImg + 1];
        img1.style.zIndex = 1;
        img2.style.zIndex = 2;
        currentImg++;
        return { img1, img2 };
    }

}

/**
 * Remove all images from the DOM
 */
function removeImages(loadedImgs) {
    loadedImgs.forEach(element => {
        element.parentNode.removeChild(element);
    });
    loadedImgs.length = 0;
}

Array.from(velocityBtns).forEach(element => {
    element.addEventListener("click", () => {
        if (element.textContent == "-" && timeout < 3000) {
            timeout += 100;
            restartAutoTransition();
        } else if (element.textContent == "+" && timeout > 100) {
            timeout -= 100;
            restartAutoTransition();
        }
    })
});

function restartAutoTransition() {
    if (auto.checked) {
        clearInterval(autoTransition);
        autoTransition = setInterval(startTransition, timeout);
    }
}