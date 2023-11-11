/**
 * Compare the choices and return the result.
 * 
 * @param {string} choice1 
 * @param {string} choice2 
 * @returns 
 */
function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if ((choice1 === choices[0] && choice2 === choices[2]) ||
        (choice1 === choices[2] && choice2 === choices[1]) ||
        (choice1 === choices[1] && choice2 === choices[0])) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

/**
 * Get a random choice for the machine.
 * 
 * @param {string} machineChoice 
 * @returns 
 */
function getRandomChoice(machineChoice) {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    if (machineChoice == randomChoice) {
        getRandomChoice(machineChoice);
    }
    return randomChoice;
}