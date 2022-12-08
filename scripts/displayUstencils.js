const dropdown3 = document.querySelector(".dropdownUstensiles");
// Dropdown
const icon3 = document.querySelector(".icon3");
// Icon

let ustensilsArray = [];
// Init the array

icon3.addEventListener("click", displayDropdown3);
// Listener

function displayDropdown3() {
  dropdown3.classList.toggle("show");
  dropdown2.classList.remove("show");
  dropdown.classList.remove("show");
}
// Dropdown function

const initUst = () => {
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      if (!ustensilsArray.includes(ustensil.toLowerCase())) {
        ustensilsArray.push(ustensil.toLowerCase());
      }
    });
  });
};
initUst();
// Init the ustensils

const filterUst = (name, closed) => {
  if (closed) {
    ustensilsArray.push(name);
  } else {
    for (let i = 0; i < ustensilsArray.length; i++) {
      if (ustensilsArray[i] === name) {
        ustensilsArray.splice(i, 1);
      }
    }
  }
  ustensilsArray.sort();
};

filterUst();
// Filter the ustensils

const ust = taggedArray.map((ustensil) => {
  return ustensil.ustensiles;
});
// Get the array of tags for ustensils

const displayUstensils = () => {
  dropdown3.innerHTML = ustensilsArray
    .map(
      (ustensil) =>
        `<input type="text" value="${ustensil}" onclick="addTag(ust, this.value), displayDropdown3()" readonly  class="ingredientInput" />`
    )
    .join("");
};
displayUstensils();
// Display the dropdown

function addUstencil(e) {
  document.querySelector(
    ".searchedItems"
  ).innerHTML += `<button type="text" readonly value=${ust[0].length} class="itemSearched dropdownUstensiles">
  ${e}
  <i class="fa-regular fa-circle-xmark" onclick="removeTag(this.parentElement.value, ust), this.parentElement.remove()"></i>
  </button>`;
}
// Onclick for the ustensil to come in the array and display under the searchbar
