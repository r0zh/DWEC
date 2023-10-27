"use strict";

let myImageId = document.getElementById("myImageId");
console.log(`La imágen anterior era: ${myImageId.dataset.nombre}`);

myImageId.src = "./img/galaxy.ico";
myImageId.dataset.nombre = "galaxia";

myImageId.style.width = "50px";
myImageId.style.height = "50px";

console.log(`La nueva imágen es: ${myImageId.dataset.nombre}`);

console.log("------------------------------------------------------------------------");

let imagenes;
imagenes = document.getElementsByClassName("myImageClass");
console.log("Las imágenes anterioes eran: ");
for (let i = 0; i < imagenes.length; i++) {
    console.log(imagenes[i].dataset.nombre);
}
console.log(`myImageClass: ${imagenes}`); // es por esto que necesitamos: Array.from
Array.from(imagenes).forEach(imagen => {
    imagen.src = "./img/earth.ico";
    imagen.dataset.nombre = "tierra";
    imagen.style.width = "50px";
    imagen.style.height = "50px";
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
