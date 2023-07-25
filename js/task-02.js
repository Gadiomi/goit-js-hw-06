const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsArr = ingredients.map((ingredient) => {
  const ingredientElem = document.createElement("li");
  ingredientElem.textContent = ingredient;
  ingredientElem.classList.add("item");
  return ingredientElem;
});

const containerElem = document.getElementById("ingredients");
containerElem.append(...ingredientsArr);
