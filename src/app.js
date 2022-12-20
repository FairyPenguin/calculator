const buttons = document.querySelectorAll("button");
const display = document.querySelector(".screen");

let calculations = [];

let accumlativeCala;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculations = [];
    display.textContent = ".";
  } else if (value === "=") {
    display.textContent = eval(accumlativeCala);
  } else {
    calculations.push(value);
    accumlativeCala = calculations.join("");
    display.textContent = accumlativeCala;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
