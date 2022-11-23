const dropdown2 = document.querySelector(".dropdownAppareils");
// Dropdown
const icon2 = document.querySelector(".icon2");
// Icon

icon2.addEventListener("click", displayDropdown2);

function displayDropdown2() {
  dropdown2.classList.toggle("show");
  dropdown.classList.remove("show");
  dropdown3.classList.remove("show");
}
// Dropdown function

const filteredAppareils = recipes.map((recipe) => {
  return recipe.appliance;
});

const filteredAppliances = [];

filteredAppareils.forEach((appareil) => {
  if (!filteredAppliances.includes(appareil)) {
    filteredAppliances.push(appareil);
  }
});

const app = taggedArray.map((appareils) => {
  return appareils.appareils;
});

dropdown2.innerHTML = filteredAppliances
  .map(
    (appareil) =>
      `<input type="text" value="${appareil}" onclick="addTag(app, this.value), displayDropdown2()" readonly  class="ingredientInput" />`
  )
  .join("");

function addAppliance(e) {
  document.querySelector(
    ".searchedItems"
  ).innerHTML += `<button type="text" readonly value=${app[0].length} class="itemSearched dropdownAppareils">
  ${e}
  <i class="fa-regular fa-circle-xmark" onclick="removeTag(this.parentElement.value, app), this.parentElement.remove()"></i>
  </button>`;
}
