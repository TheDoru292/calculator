let displayValue = 0;
let historyValue = "";
let functionUsed = false;
let firstFunctionUsed = false;
let secondFunctionUsed
let firstNumber = 0;
let secondNumber = 0;
let resultNumber = 0;
let singUsed = "";

const result = document.querySelector(".result");
result.textContent = displayValue;

function add(num1, num2) {
    resultNumber = +num1 + +num2;
    displayValue = resultNumber;
    result.textContent = displayValue;
    resultNumber = 0;
}

function subtract(num1, num2) {
    resultNumber = num1 - num2;
    displayValue = resultNumber;
    result.textContent = displayValue;
    resultNumber = 0;
}

function multiply(num1, num2) {
    resultNumber = num1 * num2;
    displayValue = resultNumber;
    result.textContent = displayValue;
    resultNumber = 0;
}

function divide(num1, num2) {
    resultNumber = num1 / num2;
    displayValue = resultNumber;
    result.textContent = displayValue;
    resultNumber = 0;
}

function operate(operator, num1, num2) {
    if(operator === "-") {
        subtract(num1, num2);
    } else if(operator === "+") {
        add(num1, num2);
    } else if(operator === "×") {
        multiply(num1, num2);
    } else if(operator === "÷") {
        divide(num1, num2);
    } else {
        console.log("Something went wrong!")
    }

    // console.log(operator, num1, num2);
}

const numbers = document.querySelectorAll(".numbers");
const clear = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const functionAdding = document.querySelectorAll(".function");
const history = document.querySelector(".history");
const equals = document.querySelector(".equals");
// const iAmFloating = document.querySelector(".float");

numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(displayValue === 0) {
            displayValue = e.target.textContent;
        } else{
            displayValue += e.target.textContent;
        }
        if(functionUsed === true) {
            displayValue = e.target.textContent;
            functionUsed = false;
        }
        result.textContent = displayValue;
    });
});

functionAdding.forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log(e.target);
        historyValue += displayValue + e.target.textContent;
        firstNumber = displayValue;
        functionUsed = true;
        firstFunctionUsed = true;
        signUsed = e.target.textContent;
        history.textContent = historyValue;
        result.textContent = displayValue;
    });
});

equals.addEventListener("click", (e) => {
    historyValue += displayValue + e.target.textContent;
    history.textContent = historyValue;
    secondNumber = displayValue;

    operate(signUsed, firstNumber, secondNumber);
});

clear.addEventListener("click", (e) => {
    displayValue = 0;
    historyValue = "";
    functionUsed = false;
    result.textContent = displayValue;
    history.textContent = historyValue;
});

deleteButton.addEventListener("click", (e) => {
    displayValue = Math.floor(displayValue / 10);
    result.textContent = displayValue;
});

// iAmFloating.addEventListener("click", (e) => {
//     displayValue = Math.floor(displayValue / 10);
//     result.textContent = displayValue;
// });