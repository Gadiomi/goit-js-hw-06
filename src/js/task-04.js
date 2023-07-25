const buttonPlus = document.querySelector('button[data-action = "increment"]');
const buttonMinus = document.querySelector('button[data-action = "decrement"]');
const getValue = document.getElementById("value");
let counterValue = 0;

const decremens = () => {
  counterValue -= 1;
  getValue.textContent = counterValue;
};

const incremens = () => {
  counterValue += 1;
  getValue.textContent = counterValue;
};

buttonPlus.addEventListener("click", incremens);
buttonMinus.addEventListener("click", decremens);
