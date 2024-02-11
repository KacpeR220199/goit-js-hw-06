const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");

const makeIngredient = ingredients.map((item) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = item;
  ingredientItem.classList.add("item");

  return ingredientItem;
});
console.log("❗ ~ makeIngredient ~ makeIngredient:", makeIngredient);
// <- tutaj zobaczysz że mamy tablice

listIngredients.append(...makeIngredient);
