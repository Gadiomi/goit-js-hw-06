const fzControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fzControl.addEventListener("input", (number) => {
  textSpan.style.fontSize = number.target.value + "px";
});
