let input1 = null;
let input2 = null;
let operator = "+";
let mathArray = [];
let result = 0;

const display = document.querySelector(".display-main");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operate");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const deletBtn = document.querySelector(".delete");

display.textContent = result;

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = ([num1, operator, num2]) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};

const clearDisplay = () => {
  result = 0;
  input1 = null;
  input2 = null;
  display.textContent = result;
};

const resetBtnStyles = () => {
  operatorBtns.forEach((btn) => btn.classList.remove("highlight"));
};

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (display.textContent.length === 9) {
      return;
    }

    if (input1 === null) {
      display.textContent = btn.value;
      input1 = display.textContent;
    } else if (mathArray.length === 2) {
      if (input2 === null) {
        display.textContent = btn.value;
        input2 = display.textContent;
      } else {
        display.textContent += btn.value;
        input2 = display.textContent;
      }
    } else {
      display.textContent += btn.value;
      input1 = display.textContent;
    }
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.value;
    mathArray.push(parseInt(input1), operator);
    console.log(mathArray);
    // [] Highlight style of pressed button
    btn.classList.add("highlight");
  });
});

equalsBtn.addEventListener("click", () => {
  if (mathArray.length === 2) {
    input2 = parseInt(display.textContent);
    mathArray.push(input2);
    console.log(mathArray);
    let result = operate(mathArray);
    console.log(result);
    display.textContent = result;
    // return;
    input1 = result;
    input2 = null;
    mathArray = [];
    resetBtnStyles();
  }
});

clearBtn.addEventListener("click", () => {
  clearDisplay();
});

deletBtn.addEventListener("click", () => {
  console.log("clicked deletBtn!");
});
