const loginForm = document.querySelector(".login-form");
const dataObject = {};
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(loginForm) {
  loginForm.preventDefault();
  const form = loginForm.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const allertMessage = "Enter your login and password!!";
  if (login === "" || password === "") {
    allert(allertMessage);
  } else {
    dataObject.login = login;
    dataObject.password = password;
  }
  console.log(dataObject);
  loginForm.reset();
}
