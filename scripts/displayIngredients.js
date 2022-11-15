const dropdown = document.querySelector(".dropdownIngredients");
// Dropdown
const icon = document.querySelector(".icon1");
// Icon

icon.addEventListener("click", displayDropdown);

function displayDropdown() {
  dropdown.classList.toggle("show");
  dropdown2.classList.remove("show");
  dropdown3.classList.remove("show");
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
  .map(
    (ingredient) =>
      `<input type="text" value="${ingredient}" onclick="addIngredient(this.value), addTag(this.value)" readonly  class="ingredientInput" />`
  )
  .join("");

function addIngredient(e) {
  document.querySelector(
    ".searchedItems"
  ).innerHTML += `<button type="text" readonly value=${e} class="itemSearched">
  ${e}
  <i class="fa-regular fa-circle-xmark" onclick="this.parentElement.remove()"></i>
  </button>`;
}
