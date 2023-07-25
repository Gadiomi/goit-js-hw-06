const buttonElem = document.querySelector("button");
const formElem = document.querySelector("form");

formElem.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled! Please try again");
  }

  const submitObj = {
    email: email.value,
    password: password.value,
  };
  console.log(submitObj);
  event.currentTarget.reset();
}
