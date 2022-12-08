const dropdown = document.querySelector(".dropdownIngredients");
// Dropdown
const icon = document.querySelector(".icon1");
// Icon

let ingredientsArray = [];
// Array of Ingredients

icon.addEventListener("click", displayDropdown);
// Display of the dropdown

function displayDropdown() {
  dropdown.classList.toggle("show");
  dropdown2.classList.remove("show");
  dropdown3.classList.remove("show");
}
// Dropdown function

const ing = taggedArray.map((ingredient) => {
  return ingredient.ingredients;
});
// Tags of Ingredients

const div = document.querySelector(".dropdownIngredients");
// Dropdown

const initIng = () => {
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!ingredientsArray.includes(ingredient.ingredient.toLowerCase())) {
        ingredientsArray.push(ingredient.ingredient.toLowerCase());
      }
    });
  });
};
initIng();
// Init the tags

const filterIng = (name, closed) => {
  if (closed) {
    ingredientsArray.push(name);
  } else {
    for (let i = 0; i < ingredientsArray.length; i++) {
      if (ingredientsArray[i] === name) {
        ingredientsArray.splice(i, 1);
      }
    }
  }
  ingredientsArray.sort();
};
// Filter ingredients and sort em

filterIng();
// init

const displayIngredients = () =>
  (div.innerHTML = ingredientsArray
    .map(
      (ingredient) =>
        `<input type="text" value="${ingredient}" onclick="addTag(ing, this.value), displayDropdown()" readonly  class="ingredientInput" />`
    )
    .join(""));

displayIngredients();
// Display for dropdown

function addIngredient(e) {
  document.querySelector(
    ".searchedItems"
  ).innerHTML += `<button type="text" readonly value=${ing[0].length} class="itemSearched">
  ${e}
  <i class="fa-regular fa-circle-xmark" onclick="removeTag(this.parentElement.value, ing), this.parentElement.remove()"></i>
  </button>`;
}
// Onclick for the ingredient to come in the array and display under the searchbar
