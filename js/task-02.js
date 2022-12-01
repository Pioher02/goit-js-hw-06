const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")


for (let i = 0; i < ingredients.length; i++) {
  const ingredient = document.createElement("li");
  ingredient.textContent = ingredients[i];
  ingredient.classList.add("item");
  list.append(ingredient);
}

