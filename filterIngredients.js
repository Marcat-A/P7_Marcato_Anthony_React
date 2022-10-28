const dropdown = document.querySelector(".dropdownIngredients");
// Dropdown
const icon = document.querySelector(".icon1");
// Icon

icon.addEventListener("click", displayDropdown);

function displayDropdown() {
  dropdown.classList.toggle("show");
}
// Dropdown function

const filteredRecipes = recipes.map((recipe) => {
  return recipe.ingredients;
});

const filteredIngredients = [];

for (let i = 0; i < filteredRecipes[i].length; i++) {
  filteredRecipes[i].filter((ingredient) => {
    if (!filteredIngredients.includes(ingredient.ingredient.toLowerCase())) {
      filteredIngredients.push(ingredient.ingredient.toLowerCase());
    }
  });
}

const div = document.querySelector(".dropdownIngredients");

div.innerHTML = filteredIngredients
  .map((ingredient) => `<span>${ingredient}</span>`)
  .join("");
