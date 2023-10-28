"use strict"

function createImage(url, imgNum) {
    let img = new Image();
    img.src = url;
    img.alt = "Imagen";
    img.width = "400";
    img.height = "400";
    img.style.position = "absolute";
    img.classList.add("loaded-img");
    if (imgNum == 0) {
        hideLoading();
        // Stablish current image index to 0
        currentImg = 0;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
    return img;
}