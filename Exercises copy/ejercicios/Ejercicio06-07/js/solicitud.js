"use strict"

/**
 * Fetches the data from the given url and returns it as a JSON object.
 * 
 * @param url 
 * @returns 
 */
async function solicitud(url) {
    let response = await fetch(url);
    if (response.ok) {
        return response;
    } else {
        throw new Error(response.status);
    }
}