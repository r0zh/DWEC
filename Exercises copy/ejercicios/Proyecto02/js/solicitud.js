"use strict"

/**
 * Fetches an image from the server and creates an image element
 * 
 * @param url 
 * @returns 
 */
async function solicitud(url) {
    let response = await fetch(url);
    // if response is an image, create an object URL
    if (response.blob) {
        let blob = await response.blob();
        return URL.createObjectURL(blob);
    }
    else if (response.ok) {
        return response;
    } else {
        throw new Error(response.status);
    }
}