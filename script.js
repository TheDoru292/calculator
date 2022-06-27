function add(a, b) {
    return (+a + +b);
}

function substract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    let temp = a / b;
    if(temp === Infinity) {
        console.log("no.");
    } else {
        return temp.toFixed(1);
    }
}

function events() {
    const numberButtons = document.querySelectorAll(".number");
    const functionButtons = document.querySelectorAll(".functions");
    const equals = document.querySelector(".equals");
    const displayText = document.querySelector(".display-text");
    const secondFunctionButtons = document.querySelectorAll(".buttons");
    const decimals = document.querySelector(".decimals");

    let firstNumber;
    let secondNumber;
    let result;
    let operator;
    let equalsUsedWithOperator;
    let operatorUsedAsEquals;
    let firstDecimalsUsed;
    let secondDecimalsUsed;

    function operate(num1, num2, operator) {
        switch(operator) {
            case "+": {
                result = add(num1, num2);
                afterMath(result);
                break;
            }
            case "-": {
                result = substract(num1, num2);
                afterMath(result);
                break;
            }
            case "x": {
                result = multiply(num1, num2);
                afterMath(result);
                break;
            }
            case "÷": {
                result = divide(num1, num2);
                afterMath(result);
                break;
            }
            default: {
                console.log("Something went very wrong.");
            }
        }
    }

    function numberFunction(e) {
        let value = e;

        if(!operator && firstNumber !== undefined) { // if there's no operator and firstNumber is defined, this will add on to the numbers
            if(firstDecimalsUsed === true) {
                firstNumber += '.' + value;
                firstDecimalsUsed = false;
                displayText.textContent = firstNumber;
            } else {
                firstNumber += value;
                displayText.textContent += value;
                console.log(firstNumber);
            }
        }

        if(!firstNumber && !operator) { // if there's no first number and no operator, then this will be the first number
            firstNumber = value;
            displayText.textContent = firstNumber;
        }

        if(firstNumber !== undefined && operator !== undefined && secondNumber !== undefined) { // this will add on to the second number
            if(secondDecimalsUsed === true) {
                secondNumber += '.' + value;
                console.log(secondNumber);
                secondDecimalsUsed = false;
                displayText.textContent = `${firstNumber}${operator}${secondNumber}`;
            } else {
                secondNumber += value;
                displayText.textContent += value;
                console.log(secondNumber);
            }
        }

        if(firstNumber !== undefined && operator !== undefined && !secondNumber) { // this will give of the first digit of the second number
            secondNumber = value;
            displayText.textContent += value;
        }
    }

    function afterMath(value) {
        console.log(firstNumber);
        if(equalsUsedWithOperator === true) {
            displayText.textContent = `${result}${operatorUsedAsEquals}`;
            operator = operatorUsedAsEquals;
        } else {
            displayText.textContent = value;
            operator = undefined;
        }
        equalsUsedWithOperator = false;
        firstNumber = value;
        secondNumber = undefined;
        result = undefined;
    }

    function reset() {
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        result = undefined;
        displayText.textContent = "";
    }

    function deleteNumber() {
        if(operator === undefined && secondNumber === undefined) {
            let temp = firstNumber.slice(0, -1);
            firstNumber = temp;
            displayText.textContent = firstNumber;
        }
        if(firstNumber !== undefined && operator !== undefined && secondNumber !== undefined) {
            console.log(secondNumber);
            let temp = secondNumber.slice(0, -1);
            secondNumber = temp;
            displayText.textContent = `${firstNumber}${operator}${secondNumber}`;
            
            if(secondNumber === '') {
                secondNumber = undefined;
            }
        }
        if(firstNumber !== undefined && secondNumber === undefined && operator !== undefined) { // deletes operator
            displayText.textContent = displayText.textContent.slice(0, -1);
            operator = undefined;
        }
    }

    function buttonFunction(e) {
        let value = e;

        if(firstNumber === undefined) {
            console.log('no.');
        }
        if(operator === undefined) {
            operator = value;
            displayText.textContent += operator;
        } if(firstNumber !== undefined && operator !== undefined && secondNumber !== undefined) {
            equalsUsedWithOperator = true;
            operatorUsedAsEquals = value;
            operate(firstNumber, secondNumber, operator);
        } else {
            displayText.textContent = displayText.textContent.replace(operator, value);
            operator = value;
        }
    }

    function decimalsFunction() {
        if(firstDecimalsUsed === undefined && secondNumber === undefined) {
            firstDecimalsUsed = true;
            displayText.textContent += '.';
        }
        if(secondDecimalsUsed === undefined && secondNumber !== undefined) {
            secondDecimalsUsed = true;
            displayText.textContent += '.';
        }
    }

    function equalsFunction() {
        if(!firstNumber && !secondNumber && !operator) {
            console.log("this is wrong and you know it.");
        }
        if(firstNumber !== undefined && operator !== undefined && secondNumber !== undefined) {
            operate(firstNumber, secondNumber, operator);
        }
    }

    functionButtons.forEach(button => {
        button.addEventListener("click", e => buttonFunction(e.target.textContent));
    });

    numberButtons.forEach(button => {
        button.addEventListener("click", e => numberFunction(e.target.textContent));
    });

    equals.addEventListener("click", e => equalsFunction());

    secondFunctionButtons.forEach(button => {
        button.addEventListener("click", e => {
            let classOfButton = e.target.classList.value;
            
            classOfButton === "reset" ? reset() :
            classOfButton === "delete" ? deleteNumber() :
            console.log("Something went wrong");
        });
    });

    decimals.addEventListener("click", e => decimalsFunction());

    window.addEventListener("keydown", e => {
        if(e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" ||
           e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "10") {
            numberFunction(e.key);
        }
        if(e.key === ".") {
            decimalsFunction();
        }
        if(e.key === "+" || e.key === "/" || e.key === "-" || e.key === "*") {
            if(e.key === "/") {
                buttonFunction("÷");
            } else if(e.key === "*") {
                buttonFunction("x");
            } else {
                buttonFunction(e.key);
            }
        }
        if(e.key === "Enter") {
            equalsFunction();
        }
    });
}

events();