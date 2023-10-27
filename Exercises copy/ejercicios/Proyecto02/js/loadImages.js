"use strict"

async function loadImages(imgNum) {
    let url = `https://picsum.photos/900`;
    let img_url = await solicitud(url);
    let resultado = await solicitud(img_url);
    let img = createImage(resultado, imgNum);
    loadedImgs.push(img);
    contenido.appendChild(img);
    if (loadedImgs.length == 10) {
        
    }
}