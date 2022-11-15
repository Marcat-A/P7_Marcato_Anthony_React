const dropdown2 = document.querySelector(".dropdownAppareils");
// Dropdown
const icon2 = document.querySelector(".icon2");
// Icon

icon2.addEventListener("click", displayDropdown);

function displayDropdown() {
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

dropdown2.innerHTML = filteredAppliances
  .map(
    (appareil) =>
      `<input type="text" value="${appareil}" onclick="addAppliance(this.value), addTag(this.value)" readonly  class="ingredientInput" />`
  )
  .join("");

function addAppliance(e) {
  document.querySelector(
    ".searchedItems"
  ).innerHTML += `<button type="text" readonly value=${e} class="itemSearched dropdownAppareils">
  ${e}
  <i class="fa-regular fa-circle-xmark" onclick="this.parentElement.remove()"></i>
  </button>`;
}
