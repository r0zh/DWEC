"use strict";

const cardBody = document.getElementById("cardBody");
let myImageId;
myImageId = document.getElementById("myImageId");
let newMyImageId;
console.log(`La imágen anterior era: ${myImageId.dataset.nombre}`);

newMyImageId = document.createElement("img");
newMyImageId.setAttribute('id', 'newMyImageId');
newMyImageId.setAttribute('src', './img/galaxy.ico');
newMyImageId.setAttribute('data-nombre', 'galaxia');

cardBody.replaceChild(newMyImageId, myImageId);

newMyImageId = document.getElementById("newMyImageId");
console.log(`La nueva imágen es: ${newMyImageId.dataset.nombre}`);

console.log("------------------------------------------------------------------------");

const images = document.getElementsByClassName("myImageClass");
let newImage;
console.log("Las imágenes anterioes eran: ");
for (let i = 0; i < images.length; i++) {
    console.log(images[i].dataset.nombre);
}
console.log(`myImageClass: ${images}`); // es por esto que necesitamos: Array.from
Array.from(images).forEach(image => {
    const newImage = document.createElement("img");
    newImage.setAttribute('class', 'newMyImageClass');
    newImage.setAttribute('src', './img/earth.ico');
    newImage.setAttribute('data-nombre', 'tierra');
    cardBody.replaceChild(newImage, image);
});
const newImages = document.getElementsByClassName("newMyImageClass");
console.log("Las nuevas imágenes son: ");
for (let i = 0; i < newImages.length; i++) {
    console.log(newImages[i].dataset.nombre);
}

console.log("------------------------------------------------------------------------");

let parrafos;
let i=0;
parrafos = document.getElementsByTagName("p");
Array.from(parrafos).forEach(parrafo => {
    parrafo.innerHTML = `Imagén <strong>${newImages.item(i++).dataset.nombre}</strong> cambiada`;
});
