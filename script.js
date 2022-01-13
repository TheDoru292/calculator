let displayValue = 0;
let historyValue = "";
let functionUsed = false;
let firstFunctionUsed = false;
let wasFunctionUsedInsteadOfEquals = false;
let firstNumber = 0;
let secondNumber = 0;
let resultNumber = 0;
let signUsed = "";
let secondSignUsed = "";
let floatUsed = false;
let floatNumber = 0;

const result = document.querySelector(".result");
const history = document.querySelector(".history");
const numbers = document.querySelectorAll(".numbers");
const clear = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const functionAdding = document.querySelectorAll(".function");
const equals = document.querySelector(".equals");
const iAmFloating = document.querySelector(".floating");
result.textContent = displayValue;

function showResults(resulto) {
    if(wasFunctionUsedInsteadOfEquals === true) {
        displayValue = resulto;
        firstNumber = displayValue;
        result.textContent = displayValue;
        historyValue = resulto + secondSignUsed;
        signUsed = secondSignUsed;
        history.textContent = historyValue;
        resultNumber = 0;
        secondNumber = 0;
    } else {
        
        displayValue = resulto;
        result.textContent = displayValue;
        resultNumber = 0;
        firstNumber = 0;
        secondNumber = 0;
    }
}

function add(num1, num2) {
    resultNumber = +num1 + +num2;
    showResults(resultNumber);
}

function subtract(num1, num2) {
    resultNumber = num1 - num2;
    showResults(resultNumber);
}

function multiply(num1, num2) {
    resultNumber = num1 * num2;
    showResults(resultNumber);
}

function divide(num1, num2) {
    resultNumber = Math.round((num1 / num2) * 10) / 10;
    showResults(resultNumber);
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
}

function deleteFunction() {
    displayValue = Math.floor(displayValue / 10);
    result.textContent = displayValue;
}

function writeNumbers(e) {
    if (displayValue === 0) {
        displayValue = e;
    } else if (displayValue >= 9999999999999999999) {
        displayValue;
    } else{
        displayValue += e;
    }
    if(wasFunctionUsedInsteadOfEquals === true) {
        displayValue = e;
        wasFunctionUsedInsteadOfEquals = false;         
    } 
    if(functionUsed === true) {
        displayValue = e;
        functionUsed = false;
    }
    if(floatUsed === true) {
        displayValue = floatNumber + "." + e;
    }
    
    result.textContent = displayValue;
}

function operator(e) {
    if(!firstNumber || !firstNumber && secondNumber === 0 || firstNumber === 0 && secondNumber === 0){
        historyValue = displayValue + e;
        firstNumber = displayValue;
        functionUsed = true;
        signUsed = e;
        history.textContent = historyValue;
        result.textContent = displayValue;
        firstFunctionUsed = true;
        floatUsed = false;
        floatNumber = 0;
    } else {
        secondNumber = displayValue;
        floatUsed = false;
        history.textContent = historyValue;
        wasFunctionUsedInsteadOfEquals = true;
        secondSignUsed = e;
        operate(signUsed, firstNumber, secondNumber);
        floatNumber = 0;
    }
}

function equal(e) {
    secondNumber = displayValue;
    if(firstNumber === 0) {

    } else if(secondNumber === 0 && signUsed === "÷") {
      alert("You can't divide with 0!");
    } else {
        historyValue += displayValue + "=";
        history.textContent = historyValue;

        operate(signUsed, firstNumber, secondNumber);
    }
}

function addFloat() {
    displayValue += "." + floatNumber;
    floatNumber = Math.round(displayValue * 10) / 10;
    floatUsed = true;
    result.textContent = displayValue;
}



numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        writeNumbers(e.target.textContent);
    });
});

functionAdding.forEach((button) => {
    button.addEventListener("click", (e) => {
        operator(e.target.textContent);
    });
});

equals.addEventListener("click", (e) => {
    equal(e.target.textContent);
});

clear.addEventListener("click", (e) => {
    displayValue = 0;
    firstNumber = 0;
    secondNumber = 0;
    resultNumber = 0;
    floatNumber = 0;
    floatUsed = false;
    historyValue = "";
    functionUsed = false;
    result.textContent = displayValue;
    history.textContent = historyValue;
});

deleteButton.addEventListener("click", (e) => {
    deleteFunction();
});

iAmFloating.addEventListener("click", (e) => {
    addFloat();
});