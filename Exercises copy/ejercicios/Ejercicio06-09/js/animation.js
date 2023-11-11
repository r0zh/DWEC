let delay = 10;

/**
 * Starts the animation
 */
function startAnimation() {
    machineChoice = getRandomChoice(machineChoice);
    machineChoiceDiv.innerText = machineChoice;
    delay *= 1.2; // Increase the delay to slow down the animation
    timeoutId = setTimeout(startAnimation, delay);
}