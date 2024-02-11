const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const input = document.querySelector("#value");
let counterValue = 0;

buttonPlus.addEventListener("click", () => {
  counterValue += 1;
  input.textContent = counterValue;
});
buttonMinus.addEventListener("click", () => {
  counterValue -= 1;
  input.textContent = counterValue;
});
