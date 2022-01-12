let displayValue = 0;
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

}

const numbers = document.querySelectorAll(".numbers");
const clear = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

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

clear.addEventListener("click", (e) => {
    displayValue = 0;
    result.textContent = displayValue;
});

deleteButton.addEventListener("click", (e) => {
    displayValue = Math.floor(displayValue / 10);
    result.textContent = displayValue;
});