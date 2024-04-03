let input1 = 1;
let input2 = 3;
let operator = "+";
let result = 0;
let mathArray = [];

const equalsBtn = document.querySelector(".equals");

// [] Show number(s) in main display

// Get the display DOM element
// When we click on a number, set display value = button value
const display = document.querySelector(".display-main");
// display.textContent = result;
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // if the mathArray is empty
    if (display.textContent == 0) {
      display.textContent = button.value;
      input1 = display.textContent;
    } else {
      display.textContent += button.value;
      input1 = display.textContent;
    }

    if (mathArray.length === 2) {
      if (display.textContent.length >= 1) {
      } else {
        display.textContent = button.value;
        console.log(input1);
      }
    }
  });
});

// When a user clicks one of the operator buttons, we need to save the current value of the display(input1):
const operatorBtns = document.querySelectorAll(".operate");
// console.log(operatorBtns);
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (mathArray.length === 2) {
      input2 = parseInt(display.textContent);
      mathArray.push(input2);
      console.log(mathArray);
      return;
    }

    console.log(input1);
    mathArray.push(parseInt(input1));
    operator = btn.value;
    mathArray.push(operator);
    console.log(mathArray);
    // Store the first input, store the operator, reset the display value.
    // display.textContent = input1;
    display.textContent = "";
  });
});

// [] Run operate() on-click '='
// Pass an array [num1, sign, num2] into operate()
function operate([num1, operator, num2]) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

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
