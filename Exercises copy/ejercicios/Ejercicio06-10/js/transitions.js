"use strict"

let currentImg = 0;

/**
 * Get two images from the loaded images array. The first one is the current image and the second one is the next image.
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
        currentImg--;
    } else {
        if (currentImg == 9) {
            currentImg = -1;
        }
        img2 = loadedImgs[currentImg + 1];
        currentImg++;
    }
    img1.style.zIndex = 1;
    img2.style.zIndex = 2;
    return { img1, img2 };
}

function noTransition() {
    transitionInProgess = true;
    let { img1, img2 } = getImages();
    img2.style.display = "block";
    img1.style.display = "none";
    transitionInProgess = false;
}

function rightToLeft() {
    transitionInProgess = true;
    let { img1, img2 } = getImages();
    img2.style.display = "block";
    img2.style.left = "400px";
    img1.style.left = "0px";

    let id = setInterval(frame, 1);
    function frame() {
        if (img2.style.left == "0px") {
            clearInterval(id);
            img1.style.display = "none";
            resetImage(img1);
            transitionInProgess = false;
        } else {
            img1.style.left = parseInt(img1.style.left) - 1 + "px";
            img2.style.left = parseInt(img2.style.left) - 1 + "px";
        }
    }
}

function leftToRight() {
    transitionInProgess = true;
    let { img1, img2 } = getImages();
    img2.style.display = "block";
    img2.style.left = "-400px";
    img1.style.left = "0px";

    let id = setInterval(frame, 1);
    function frame() {
        if (img2.style.left == "0px") {
            clearInterval(id);
            img1.style.display = "none";
            resetImage(img1);
            transitionInProgess = false;
        } else {
            img1.style.left = parseInt(img1.style.left) + 1 + "px";
            img2.style.left = parseInt(img2.style.left) + 1 + "px";
        }
    }
}

function topToBottom() {
    transitionInProgess = true;
    let { img1, img2 } = getImages();
    img2.style.display = "block";
    img2.style.bottom = "400px";
    img1.style.bottom = "0px";

    let id = setInterval(frame, 1);
    function frame() {
        if (img2.style.bottom == "0px") {
            clearInterval(id);
            img1.style.display = "none";
            resetImage(img1);
            transitionInProgess = false;
        } else {
            img1.style.bottom = parseInt(img1.style.bottom) - 1 + "px";
            img2.style.bottom = parseInt(img2.style.bottom) - 1 + "px";
        }
    }
}

function bottomToTop() {
    transitionInProgess = true;
    let { img1, img2 } = getImages();
    img2.style.display = "block";
    img2.style.bottom = "-400px";
    img1.style.bottom = "0px";

    let id = setInterval(frame, 1);
    function frame() {
        if (img2.style.bottom == "0px") {
            clearInterval(id);
            img1.style.display = "none";
            resetImage(img1);
            transitionInProgess = false;
        } else {
            img1.style.bottom = parseInt(img1.style.bottom) + 1 + "px";
            img2.style.bottom = parseInt(img2.style.bottom) + 1 + "px";
        }
    }
}

function fade() {
    transitionInProgess = true;
    let { img1, img2 } = getImages();
    img2.style.display = "block";
    img2.style.opacity = "0";
    img1.style.opacity = "1";

    let id = setInterval(frame, 1);
    function frame() {
        if (img2.style.opacity == "1") {
            clearInterval(id);
            img1.style.display = "none";
            resetImage(img1);
            transitionInProgess = false;
        } else {
            img1.style.opacity = parseFloat(img1.style.opacity) - 0.01;
            img2.style.opacity = parseFloat(img2.style.opacity) + 0.01;
        }
    }
}

function smallToBig() {
    transitionInProgess = true;
    let { img1, img2 } = getImages();
    img2.style.display = "block";
    img2.style.transform = "scale(0)";
    img1.style.transform = "scale(1)";

    let id = setInterval(frame, 1);
    function frame() {
        if (img2.style.transform == "scale(1)") {
            clearInterval(id);
            img1.style.display = "none";
            resetImage(img1);
            transitionInProgess = false;
        } else {
            img2.style.transform = "scale(" + (parseFloat(img2.style.transform.slice(6, -1)) + 0.01) + ")";
        }
    }
}

function bigToSmall() {
    transitionInProgess = true;
    let { img1, img2 } = getImages();
    img1.style.zIndex = 2;
    img2.style.zIndex = 1;
    img2.style.display = "block";
    img2.style.transform = "scale(1)";
    img1.style.transform = "scale(1)";

    let id = setInterval(frame, 1);
    function frame() {
        if (img1.style.transform == "scale(0)") {
            clearInterval(id);
            img1.style.display = "none";
            resetImage(img1)
            transitionInProgess = false;
        } else {
            img1.style.transform = "scale(" + (parseFloat(img1.style.transform.slice(6, -1)) - 0.01) + ")";
        }
    }
}


function resetImage(img) {
    img.style.opacity = "1";
    img.style.transform = "scale(1)";
    img.style.left = "0px";
    img.style.bottom = "0px";
}