const display = document.getElementById('display');
let currentInput = '';
let lastInput = '';

function appendValue(value) {
  if (value === '.' && currentInput.includes('.')) return; // prevent multiple dots
  currentInput += value;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  lastInput = '';
  display.innerText = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    lastInput = currentInput;
    currentInput = eval(currentInput).toString(); // use eval to calculate
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = 'Error';
    currentInput = '';
  }
}