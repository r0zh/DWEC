"use strict";

const myImageId = document.getElementById("myImageId");
console.log(`La imágen anterior era: ${myImageId.dataset.nombre}`);

myImageId.setAttribute('src', './img/galaxy.ico');
myImageId.setAttribute('data-nombre', 'galaxia');

myImageId.setAttribute('style', 'width: 50px');
myImageId.setAttribute('style', 'height: 50px');

console.log(`La nueva imágen es: ${myImageId.dataset.nombre}`);

console.log("------------------------------------------------------------------------");

const imagenes = document.getElementsByClassName("myImageClass");
console.log("Las imágenes anterioes eran: ");
for (let i = 0; i < imagenes.length; i++) {
    console.log(imagenes[i].dataset.nombre);
}
console.log(`myImageClass: ${imagenes}`); // es por esto que necesitamos: Array.from
Array.from(imagenes).forEach(imagen => {
    imagen.setAttribute('src', './img/earth.ico');
    imagen.setAttribute('data-nombre', 'tierra');
    imagen.setAttribute('style', 'width: 50px');
    imagen.setAttribute('style', 'height: 50px');
});
console.log("Las nuevas imágenes son: ");
for (let i = 0; i < imagenes.length; i++) {
    console.log(imagenes[i].dataset.nombre);
}

console.log("------------------------------------------------------------------------");

let parrafos;
let i=0;
parrafos = document.getElementsByTagName("p");
Array.from(parrafos).forEach(parrafo => {
    parrafo.innerHTML = `Imagén <strong>${imagenes.item(i++).dataset.nombre}</strong> cambiada`;
});
