let input1 = 1;
let input2 = 3;
let operator = "+";
let result = 0;

// [] Show number(s) in main display

// Get the display DOM element
// When we click on a number, set display value = button value
const display = document.querySelector(".display-main");
// display.textContent = result;
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent == 0) {
      display.textContent = button.value;
    } else {
      display.textContent += button.value;
    }
  });
});

// [] Run operate() on-click '='
function operate(num1, operator, num2) {
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
