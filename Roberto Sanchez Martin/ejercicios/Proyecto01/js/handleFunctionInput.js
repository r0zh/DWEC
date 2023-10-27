function handleFunctionInput(functionName) {
    switch (functionName) {
        case "CE":
            display.innerHTML = "";
            break;
        case "C":
            display.innerHTML = display.textContent.slice(0, -1);
            break;
        case "=":
            display.innerHTML = evaluateExpression(display.textContent);
            break;
        case "<=":
            display.innerHTML = display.textContent.slice(0, -1);
            break;
        case "+/-":
            if (display.textContent.slice(0, 1) == "-") {
                display.innerHTML = display.textContent.slice(1);
            }
            else {
                display.innerHTML = "-" + display.textContent;
            }
            break;
        case "Rnd":
            display.innerHTML = Math.random() * 100;
            break;
        default:
            break;
    }
}

function takeLastNum(params) {

}