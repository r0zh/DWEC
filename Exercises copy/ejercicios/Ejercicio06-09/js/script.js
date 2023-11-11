const buttons = document.getElementsByClassName("options");
const machineChoiceDiv = document.getElementById("machine-choice");
const result = document.getElementById("result");
let machineChoice;
let timeoutId;

const choices = ["🪨", "🧻", "✂️"];


Array.from(buttons).forEach((button) => {

    button.addEventListener("click", function () {
        result.innerHTML = "";
        let playerChoice = this.id;
        if (playerChoice === "rock") {
            playerChoice = "🪨";
        } else if (playerChoice === "paper") {
            playerChoice = "🧻";
        }
        else {
            playerChoice = "✂️";
        }
        startAnimation();

        setTimeout(function () {
            clearTimeout(timeoutId);
            let matchResult = compare(playerChoice, machineChoice);
            result.innerHTML = matchResult;
            delay = 10; // Reset the delay
        }, 6000);
    });
});
