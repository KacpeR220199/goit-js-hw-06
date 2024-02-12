const loginForm = document.querySelector(".login-form");
const dataObject = {};
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const alertMessage = "Enter your login and password!!";
  if (login === "" || password === "") {
    alert(alertMessage);
  } else {
    dataObject.login = login;
    dataObject.password = password;
  }
  console.log(dataObject);
  loginForm.reset();
}
