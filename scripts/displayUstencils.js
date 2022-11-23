const dropdown3 = document.querySelector(".dropdownUstensiles");
// Dropdown
const icon3 = document.querySelector(".icon3");
// Icon

icon3.addEventListener("click", displayDropdown3);

function displayDropdown3() {
  dropdown3.classList.toggle("show");
  dropdown2.classList.remove("show");
  dropdown.classList.remove("show");
}
// Dropdown function

const filteredObjets = recipes.map((recipe) => {
  return recipe.ustensils;
});

const filteredUstencils = [];

for (let i = 0; i < filteredObjets.length; i++) {
  filteredObjets[i].filter((ustensil) => {
    if (!filteredUstencils.includes(ustensil)) {
      filteredUstencils.push(ustensil);
    }
  });
}
const ust = taggedArray.map((ustensil) => {
  return ustensil.ustensiles;
});

dropdown3.innerHTML = filteredUstencils
  .map(
    (ustensil) =>
      `<input type="text" value="${ustensil}" onclick="addTag(ust, this.value), displayDropdown3()" readonly  class="ingredientInput" />`
  )
  .join("");

function addUstencil(e) {
  document.querySelector(
    ".searchedItems"
  ).innerHTML += `<button type="text" readonly value=${ust[0].length} class="itemSearched dropdownUstensiles">
  ${e}
  <i class="fa-regular fa-circle-xmark" onclick="removeTag(this.parentElement.value, ust), this.parentElement.remove()"></i>
  </button>`;
}
