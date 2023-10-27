"use strict"

function mostrarJoke() {
    textElement.value = "";

    // Making a fetch request for a random joke
    fetch(`https://api.chucknorris.io/jokes/random`)
        // Parsing the response to a JSON object
        .then(response => response.json())
        .then(json => {
            // Updating the text element value with the joke from the response
            textElement.value = `${json.value}`;
        })
}

