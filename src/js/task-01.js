const numberOfCategories = document.querySelectorAll("#categories .item");

console.log(`Number of categories:${numberOfCategories.length}`);

numberOfCategories.forEach(function (category) {
  const categoryOfName = category.querySelector("h2").textContent;
  const categoryOfNumber = category.querySelectorAll("ul li").length;
  console.log(`Category:${categoryOfName}`);
  console.log(`Elements:${categoryOfNumber}`);
});

const listItem = document.createElement("");
