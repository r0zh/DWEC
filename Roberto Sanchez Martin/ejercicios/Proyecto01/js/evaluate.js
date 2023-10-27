"use strict";

function evaluateExpression(expression) {

    // Split the expression into an array of numbers and operators
    var tokens = expression.split(/(?<!\()[\+\–\*\/\^]|mod/g);


    // Create stacks to hold the numbers and operators
    var numberStack = [];
    var operatorStack = [];

    // Define the precedence of operators
    var precedence = {
        '+': 1,
        '–': 1,
        '*': 2,
        '/': 2,
        "^": 3,
        'mod': 3
    };

    // Helper function to perform an operation
    function performOperation() {
        var operator = operatorStack.pop();
        var operand2 = numberStack.pop();
        var operand1 = numberStack.pop();

        switch (operator) {
            case '+':
                numberStack.push(operand1 + operand2);
                break;
            case '–':
                numberStack.push(operand1 - operand2);
                break;
            case '*':
                numberStack.push(operand1 * operand2);
                break;
            case '/':
                numberStack.push(operand1 / operand2);
                break;
            case '^':
                numberStack.push(Math.pow(operand1, operand2));
                break;
            case 'mod':
                numberStack.push(operand1 % operand2);
                break;
        }
    }

    // Iterate through the tokens
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        // If the token is a number```
        if (!isNaN(token)) {
            numberStack.push(parseFloat(token));
        } else if (token === 'e') {
            numberStack.push(Math.E);
        } else if (token === 'π') {
            numberStack.push(Math.PI);
        }
        // If the token is an operator
        else if (token === '+' || token === '–' || token === '*' || token === '/' || token === '^' || token === 'mod') {
            // Perform operations with higher precedence before pushing the current operator
            while (
                operatorStack.length > 0 &&
                precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]
            ) {
                performOperation();
            }
            operatorStack.push(token);
        }
    }

    ('numberStack:', numberStack);
    ('operatorStack:', operatorStack);

    // Perform any remaining operations
    while (operatorStack.length > 0) {
        performOperation();
    }

    // The final result is the only element left in the number stack
    return numberStack[0];
}

