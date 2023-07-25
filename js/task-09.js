function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const paragrafColor = document.querySelector(".color");
const bodyElem = document.querySelector("body");

colorButton.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  paragrafColor.textContent = `${newColor}`;
}
