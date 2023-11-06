"use strict"

const auto = document.getElementById("auto");
const velocityBtns = document.getElementsByClassName("velocityBtn");
// Variable to store the transition timeout when automatic transition is enabled
let timeout = 1000;

let autoTransition;

/**
 * Starts or stops the automatic transition
 */
auto.addEventListener('change', function () {
    if (this.checked) {
        autoTransition = setInterval(startTransition, timeout);
    } else {
        clearInterval(autoTransition);
    }
});

/**
 * Controls the automatic transition interval
 */
Array.from(velocityBtns).forEach(element => {
    element.addEventListener("click", () => {
        if (element.textContent == "-" && timeout < 3000) {
            timeout += 100;
            restartAutoTransition();
        } else if (element.textContent == "+" && timeout > 100) {
            timeout -= 100;
            restartAutoTransition();
        }
    })
});

/**
 * Restarts the automatic transition interval with the new timeout
 */
function restartAutoTransition() {
    if (auto.checked) {
        clearInterval(autoTransition);
        autoTransition = setInterval(startTransition, timeout);
    }
}