let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput.length > 0 && !/[+\-*/%]$/.test(currentInput)) {
        currentInput += operator;
        display.textContent = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function backspace() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    }
}