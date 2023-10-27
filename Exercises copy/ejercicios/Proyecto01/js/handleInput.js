let functions = document.getElementsByClassName("function");
let expression = display.textContent;
let operators = /(?<!\()[\+\–\*\/\^]|mod/g;


function handleInput(newInput) {
    if (isOperator(newInput)) { // check if input is an operator
        if (isOperator(display.textContent.slice(-1))) { // check if last input was an operator
            ("last input was an operator")
            if (newInput == "mod") {
                display.innerHTML = display.textContent.slice(0, -1) + "m";
            } else {
                display.innerHTML = display.textContent.slice(0, -1) + newInput; // replace last operator with new operator
            }
        } else {
            display.innerHTML += newInput; // add new operator to input
        }
    } else if (isFunction(newInput)) { // check if input is a function
        handleFunctionInput(newInput); // handle function
    } else if (isMathFunction(newInput)) {
        handleMathFunctionInput(newInput);
    } else if (!(display.textContent.slice(-1) == "e" || display.textContent.slice(-1) == "π")) {
        display.innerHTML += newInput; // add non-operator (number) input to input
    }
}

function isOperator(input) {
    return ['+', '–', '*', '/', 'a^b', 'mod'].includes(input); // check if input is one of the four operators
}

function isFunction(input) {
    return ['C', 'CE', '=', "<=", "+/-", "Rnd"].includes(input); // check if input is one of the three functions
}

function isMathFunction(input) {
    return ['sen', 'cos', 'tan', 'log', 'ln', '√', '!', "1/x", "2^a", "π", "e", "%"].includes(input); // check if input is one of the math functions
}