const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (call) => {
  output.textContent = call.currentTarget.value;
  if (input.value.trim() === "") {
    output.textContent = "Anonymous";
  }
});
