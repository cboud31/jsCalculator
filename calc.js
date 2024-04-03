console.log("Hello from calc.js!");

// What variables do we need?
/*
[x] input1: First # entered into calculator
[x] input2: Second # entered into calculator (after operand sign)
[x] operator: operator sign passed into operate()
[X] mathArr: [input1, input2, operator] array passed into operate()
[X] result: output of operate(); used to update display
[] resultArr: stores previous results, use resultArr.reduce() to keep tally
*/
let input1 = null;
let input2 = null;
let operator = "+";
const mathArray = [];
let result = 0;

const display = document.querySelector(".display-main");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operate");
const equalsBtn = document.querySelector(".equals");
// console.log(numberBtns);
display.textContent = result;
/*
[X] Functions for 4 math operations: add, subtract, multiply, divide
[X] Variables for operate() inputs
[X] Functions -> operate()
[] Update display when pressing numberBtns
*/

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

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // [X] Limit the display to 9 characters
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
    // What needs to happen when we hit this button?
    // [x] Store the display value (input1) in the mathArray
    // [x] Store the operator button value in the mathArray
    operator = btn.value;
    mathArray.push(parseInt(input1), operator);

    console.log(mathArray);
    console.dir(display);
    // [] Highlight style of pressed button
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
  }
});
