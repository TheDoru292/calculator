let displayValue = 0;
let historyValue = "";
const result = document.querySelector(".result");
result.textContent = displayValue;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num) {
    console.log(operator, num);
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
        result.textContent = displayValue;
    });
});

functionAdding.forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log(e.target);
        historyValue += displayValue + e.target.textContent;
        displayValue = 0;
        history.textContent = historyValue;
        result.textContent = displayValue;
    });
});

clear.addEventListener("click", (e) => {
    displayValue = 0;
    historyValue = "";
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