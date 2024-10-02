const display = document.getElementById('display');
let currentInput = '';
let lastInput = '';
let totalInput = '';
let lastIsOp = false;
let lastIscal = false;

function appendValue(value) {
  if (value === '0' && currentInput === '') return;
  if (lastIsOp) {
    currentInput = '';
    lastIsOp = false;
  }
  if (lastIscal) {
    totalInput = '';
    lastIscal = false;
  }
  currentInput += value;
  display.innerText = currentInput;
}

function appendOperator(value) {
  if (lastIscal) {
    lastIscal = false;
  }
  lastIsOp = true;
  totalInput += currentInput + value;
  currentInput = value;
  display.innerText = currentInput;
}

function appendDot(value) {
  if (lastIsOp) {
    currentInput = '';
    lastIsOp = false;
  }
  if (lastIscal) {
    totalInput = '';
    lastIscal = false;
  }
  if (value === '.' && currentInput.includes('.')) return;
  currentInput += value;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  totalInput = '';
  display.innerText = '0';
}

function deleteLast() {
  if (lastIsOp) return;
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    if (lastIsOp) return;
    totalInput += currentInput;
    totalInput = eval(totalInput).toString(); // use eval to calculate
    display.innerText = totalInput;
    currentInput = '';
    lastIscal = true;
  } catch (error) {
    display.innerText = 'Error';
    currentInput = '';
    totalInput = '';
  }
}