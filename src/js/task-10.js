function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const givenValue = document.querySelector("input[type=number]");
const createBox = document.querySelector("button[data-create]");
const destroyBox = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const size = 30;
const dives = [];

createBox.addEventListener("click", () => {
  if (
    givenValue >= input.attributes.min.value &&
    givenValue <= input.attributes.max.value
  ) {
    for (let i = 0; i < givenValue.value; i += 1) {
      const box = document.createElement("div");
      const boxColor = getRandomHexColor();

      box.style.backgroundColor = boxColor;
      box.style.width = `${size * i}px`;
      box.style.height = `${size * i}px`;
      dives.push(box);
    }
    divDives.append(...boxes);
  } else {
    alert("Podaj liczbę od 1 do 100");
  }
});
destroyBox.addEventListener("click", () => {
  if (box) {
    box.remove();
  } else {
    console.log("div nie istnieje");
  }
});
