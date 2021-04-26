const counterValue = document.querySelector("#value");
const buttons = document.querySelectorAll("#counter button");

const decrementBtn = buttons[0];
const incrementBtn = buttons[1];

const step = 1;
let calcValue = 0;

decrementBtn.addEventListener("click", () => {
  calcValue -= step;
  counterValue.innerHTML = calcValue;
});

incrementBtn.addEventListener("click", () => {
  calcValue += step;
  counterValue.innerHTML = calcValue;
});
