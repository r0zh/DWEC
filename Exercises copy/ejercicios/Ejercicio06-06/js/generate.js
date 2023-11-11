/**
 * Generate a random plate.
 * 
 * @returns {String} plate
 */
function generatePlate() {
    let plate = "";
    for (let i = 0; i < 3; i++) {
        plate += generateLetter();

    }
    plate += "-";
    for (let i = 0; i < 5; i++) {
        plate += generateNumber();
    }
    return plate;
}

/**
 * Generate a random letter.
 * 
 * @returns {String} letter
 */
function generateLetter() {
    let letter = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(letter);
}

/**
 * Generate a random number.
 * 
 * @returns {Number} number
 */
function generateNumber() {
    return Math.floor(Math.random() * 10);
}
