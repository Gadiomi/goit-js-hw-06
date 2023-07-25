const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

textInput.addEventListener("input", handler);

console.log(textOutput.textContent);
console.log(textInput.value);

function handler(event) {
  event.preventDefault();
  if (textInput.value) {
    textOutput.textContent = textInput.value;
  } else {
    textOutput.textContent = "Anonymous";
  }
}
