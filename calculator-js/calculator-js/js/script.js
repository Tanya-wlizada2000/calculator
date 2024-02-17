"use strict";

const calculatorDivEl = document.querySelector("#calculatorDiv");
calculatorDivEl
// screen
const calculatorScreenEl = calculatorDivEl.querySelector("#calculatorScreen");

// key buttons
const oneKeyBtnEl = calculatorDivEl.querySelector("#oneKeyBtn");
oneKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 1;
  } else {
    calculatorScreenEl.value = calculatorScreenEl.value + 1;
  }
});

const twoKeyBtnEl = calculatorDivEl.querySelector("#twoKeyBtn");
twoKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 2;
  } else{
    calculatorScreenEl.value = calculatorScreenEl.value + 2;
  }
});

const threeKeyBtnEl = calculatorDivEl.querySelector("#threeKeyBtn");
threeKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 3;
  } else{
    calculatorScreenEl.value = calculatorScreenEl.value + 3;
  }
});

const fourKeyBtnEl = calculatorDivEl.querySelector("#fourKeyBtn");
fourKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 4;
  } else{
    calculatorScreenEl.value = calculatorScreenEl.value + 4;
  }
});

const fiveKeyBtnEl = calculatorDivEl.querySelector("#fiveKeyBtn");
fiveKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 5;
  } else{
    calculatorScreenEl.value = calculatorScreenEl.value + 5;
  }
});

const sixKeyBtnEl = calculatorDivEl.querySelector("#sixKeyBtn");
sixKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 6;
  } else{
    calculatorScreenEl.value = calculatorScreenEl.value + 6;
  }
});

const sevenKeyBtnEl = calculatorDivEl.querySelector("#sevenKeyBtn");
sevenKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 7;
  } else{
    calculatorScreenEl.value = calculatorScreenEl.value + 7;
  }
});

const eightKeyBtnEl = calculatorDivEl.querySelector("#eightKeyBtn");
eightKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 8;
  } else{
    calculatorScreenEl.value = calculatorScreenEl.value + 8;
  }
});

const nineKeyBtnEl = calculatorDivEl.querySelector("#nineKeyBtn");
nineKeyBtnEl.addEventListener('click', () => {
  if (calculatorScreenEl.value === '0') {
    calculatorScreenEl.value = 9;
  } else{
    calculatorScreenEl.value = calculatorScreenEl.value + 9;
  }
});

const zeroKeyBtnEl = calculatorDivEl.querySelector("#zeroKeyBtn");
zeroKeyBtnEl.addEventListener('click', () => {
  calculatorScreenEl.value = calculatorScreenEl.value + 0;
});

// actionButton

let firstNumber = null;
let secondNumber = null;

let operation = '';

const addBtnEl = calculatorDivEl.querySelector("#addBtn");
addBtnEl.addEventListener("click", () => {
  firstNumber = +calculatorScreenEl.value;
  operation = '+';
  calculatorScreenEl.value = '0';
});

const subtrBtnEl = calculatorDivEl.querySelector("#subtrBtn");
subtrBtnEl.addEventListener("click", () => {
  firstNumber = +calculatorScreenEl.value;
  operation = '-';
  calculatorScreenEl.value = '0';
});

const multiplyBtnEl = calculatorDivEl.querySelector("#multiplyBtn");
multiplyBtnEl.addEventListener("click", () => {
  firstNumber = +calculatorScreenEl.value;
  operation = '*';
  calculatorScreenEl.value = '0';
});
const divideBtnEl = calculatorDivEl.querySelector("#divideBtn");
divideBtnEl.addEventListener("click", () => {
  firstNumber = +calculatorScreenEl.value;
  operation = '/';
  calculatorScreenEl.value = '0';
});
const clBtnEl = calculatorDivEl.querySelector("#clBtn");
clBtnEl.addEventListener("click", () => {
  calculatorScreenEl.value = '0';
  firstNumber = null;
  secondNumber = null;
  operation = '';
});


const equalBtnEl = calculatorDivEl.querySelector("#equalBtn");
equalBtnEl.addEventListener("click", () => {
  secondNumber = +calculatorScreenEl.value;

  if (firstNumber && secondNumber) {
    if (operation === '+') {
      calculatorScreenEl.value = firstNumber + secondNumber;
      firstNumber = firstNumber + secondNumber;
      secondNumber = null;
    }
  }

  if (firstNumber && secondNumber) {
    if (operation === '-') {
      calculatorScreenEl.value = firstNumber - secondNumber;
      firstNumber = firstNumber + secondNumber;
      secondNumber = null;
    }
  }
  
  if (firstNumber && secondNumber) {
    if (operation === '*') {
      calculatorScreenEl.value = firstNumber * secondNumber;
      firstNumber = firstNumber + secondNumber;
      secondNumber = null;
    }
  }

  if (firstNumber && secondNumber) {
    if (operation === '/') {
      calculatorScreenEl.value = firstNumber / secondNumber;
      firstNumber = firstNumber + secondNumber;
      secondNumber = null;
    }
  }
  
});





