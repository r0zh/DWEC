"use strict";


/**
 * Handles the math functions
 * 
 * @param functionName 
 */
function handleMathFunctionInput(functionName) {
    // If last character is an operator, remove it
    switch (functionName) {
        case "sen":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + Math.sin(takeLastNumber(expression));
            break;
        case "cos":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + Math.cos(takeLastNumber(expression));
            break;
        case "tan":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + Math.tan(takeLastNumber(expression));
            break;
        case "log":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + Math.log10(takeLastNumber(expression));
            break;
        case "ln":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + Math.log(takeLastNumber(expression));
            break;
        case "√":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + Math.sqrt(takeLastNumber(expression));
            break;
        case "!":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + factorial(takeLastNumber(expression));
            break;
        case "1/x":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + (1 / takeLastNumber(expression));
            break;
        case "2^a":
            if (isLastCharOperator(expression)) {
                display.innerHTML = expression + "2^";
            } else {
                display.innerHTML = removeLastNumber(expression) + "2^";
            }
            break;
        case "a^b":
            if (isLastCharOperator(expression)) {
                display.innerHTML = expression + "^";
            } else {
                display.innerHTML = removeLastNumber(expression) + takeLastNumber(expression) + "^";
            }
            break;
        case "e":
            if (isLastCharOperator(expression)) {
                display.innerHTML = expression + "e";
            } else {
                display.innerHTML = removeLastNumber(expression) + "e";
            }
            break;
        case "π":
            if (isLastCharOperator(expression)) {
                display.innerHTML = expression + "π";
            } else {
                display.innerHTML = removeLastNumber(expression) + "π";
            }
            break;
        case "%":
            removeLastOperator();
            display.innerHTML = removeLastNumber(expression) + (takeLastNumber(expression) / 100);
            break;
        default:
            break;
    }

    function removeLastOperator() {
        if (getLastOperatorIndex(expression) == expression.length - 1) {
            expression = expression.slice(0, expression.length - 1);
        }
    }
}


/**
 * Returns the expression without the last number
 * 
 * @param expression 
 * @returns 
 */
function removeLastNumber(expression) {
    let lastOperatorIndex = getLastOperatorIndex(expression);
    if (lastOperatorIndex != -1) {
        return expression.slice(0, lastOperatorIndex + 1);
    } else {
        return "";
    }
}

/**
 * Returns the last number of the expression
 * 
 * @param expression 
 * @returns 
 */
function takeLastNumber(expression) {
    let lastOperatorIndex = getLastOperatorIndex(expression);
    if (lastOperatorIndex == -1) {
        return expression;
    } else {
        let lastNumber = expression.slice(lastOperatorIndex + 1);

        return lastNumber;
    }
}

/**
 * Returns the index of the last operator of the expression
 * 
 * @param expression 
 * @returns 
 */
function getLastOperatorIndex(expression) {
    let match;
    let lastIndex;

    while (match = operators.exec(expression)) {
        lastIndex = match.index;
    }

    return lastIndex;
}

function isLastCharOperator(expression) {
    return ['+', '–', '*', '/'].includes(expression.slice(-1));
}

/**
 * Returns the factorial of a number
 * 
 * @param num 
 * @returns 
 */
function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
factorial(5);