let firstNum = 0;
let secNum = 0;
let numIndicator = "first";
let numEntered = "false";
let operator;
let displayValue = "Example Text";

const add = function (a, b) {
  let numA = Number(a);
  let numB = Number(b);
  let total = numA + numB;
  return total;
};

const subtract = function (a, b) {
  let numA = Number(a);
  let numB = Number(b);
  let total = numA - numB;
  return total;
};

const multiply = function (a, b) {
  let numA = Number(a);
  let numB = Number(b);
  let total = numA * numB;
  return total;
};

const divide = function (a, b) {
  let numA = Number(a);
  let numB = Number(b);
  let total = numA / numB;
  return total;
};

const operate = function (firstNum, secNum, operator) {
  let solution;
  if (operator == "+") {
    solution = add(firstNum, secNum);
    solution = Math.round(solution * 100) / 100;
    return solution;
  }
  if (operator == "-") {
    solution = subtract(firstNum, secNum);
    solution = Math.round(solution * 100) / 100;
    return solution;
  }
  if (operator == "/") {
    if (secNum === 0) {
      return Infinity;
    }
    solution = divide(firstNum, secNum);
    solution = Math.round(solution * 100) / 100;
    return solution;
  }
  if (operator == "*") {
    solution = multiply(firstNum, secNum);
    solution = Math.round(solution * 100) / 100;
    return solution;
  }
};

function display(value) {
  displayValue = value;
  const div = document.querySelector("div");
  const screen = document.querySelector(".screen");
  const para = document.createElement("p");
  para.classList.add("para");
  para.textContent = displayValue;
  screen.appendChild(para);
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  if (button.className === "num") {
    button.addEventListener("click", () => {
      if (numIndicator === "first") {
        firstNum += button.id;
        numEntered = "true";
        display(button.id);
      }
      if (numIndicator === "second") {
        secNum += button.id;
        display(button.id);
      }
    });
  }
  if (button.className === "op") {
    button.addEventListener("click", () => {
      if (numIndicator === "first" && numEntered == "true") {
        firstNum = Number(firstNum);
        numIndicator = "second";
        operator = button.id;
        display(button.id);
      }
    });
  }
  if (button.className === "equal") {
    button.addEventListener("click", () => {
      secNum = Number(secNum);
      numIndicator = "NA";
      display(button.id)
      display(operate(firstNum, secNum, operator));
    });
  }
  if (button.className === "clr") {
    button.addEventListener("click", () => {
      firstNum = 0;
      secNum = 0;
      numEntered = "false"
      numIndicator = "first";
      removeElementsByClass("para");
    });
  }
});
