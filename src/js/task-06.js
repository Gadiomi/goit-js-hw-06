const inputContent = document.querySelector("input");
const rightInput = Number(inputContent.dataset.length);

inputContent.addEventListener("blur", changeColor);

function changeColor() {
  if (inputContent.value.length === rightInput) {
    inputContent.classList.add("valid");
    inputContent.classList.remove("invalid");
  } else {
    inputContent.classList.remove("valid");
    inputContent.classList.add("invalid");
  }
}
