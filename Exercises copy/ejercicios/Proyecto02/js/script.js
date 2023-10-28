"use strict"

// Button to load new images
const loadNewImages = document.getElementById("loadNewImages");
// DOM element where the images will be displayed
const contenido = document.getElementById("contenido");
// Loading gif
const loading = document.getElementById("loading");
// Transition options
const options = document.getElementById("options");
// Array to store loaded images to delete them in a future
let loadedImgs = [];



// Variable to store if the order of the images is reversed
let reverse = false;

// Variable to store the transition mode
let mode = document.querySelector('input[name="mode"]:checked').id;

// Display images when the page loads
displayImages();

/**
 * Change transition mode when the radio buttons are clicked
 */
options.addEventListener("change", () => {
    mode = document.querySelector('input[name="mode"]:checked').id;
});

/**
 * Displays new images when the button is clicked
 */
loadNewImages.addEventListener("click", () => {
    removeImages(loadedImgs)
    displayImages();
});

/**
 * Displays the images in the DOM
 */
function displayImages() {
    displayLoading();
    for (let i = 0; i < 10; i++) {
        loadImages(i);
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


