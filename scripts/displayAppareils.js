const dropdown2 = document.querySelector(".dropdownAppareils");
// Dropdown
const icon2 = document.querySelector(".icon2");
// Icon

let appareilsArray = [];
// Arrays of appareils

icon2.addEventListener("click", displayDropdown2);
// Listener onclick

function displayDropdown2() {
  dropdown2.classList.toggle("show");
  dropdown.classList.remove("show");
  dropdown3.classList.remove("show");
}
// Dropdown function

const filterApp = (name, closed) => {
  if (closed) {
    appareilsArray.push(name);
  } else {
    for (let i = 0; i < appareilsArray.length; i++) {
      if (appareilsArray[i] === name) {
        appareilsArray.splice(i, 1);
      }
    }
  }
  appareilsArray.sort();
};
// Filtered the appareils

const initAppareils = () => {
  recipes.forEach((recipe) => {
    if (!appareilsArray.includes(recipe.appliance.toLowerCase())) {
      appareilsArray.push(recipe.appliance.toLowerCase());
    }
  });
};
// Init

initAppareils();

const app = taggedArray.map((appareils) => {
  return appareils.appareils;
});
// Return the array of appareils

const displayAppareils = () =>
  (dropdown2.innerHTML = appareilsArray
    .map(
      (appareil) =>
        `<input type="text" value="${appareil}" onclick="addTag(app, this.value), displayDropdown2()" readonly  class="ingredientInput" />`
    )
    .join(""));

displayAppareils();
// Display appareils in the dropdown

function addAppliance(e) {
  document.querySelector(
    ".searchedItems"
  ).innerHTML += `<button type="text" readonly value=${app[0].length} class="itemSearched dropdownAppareils">
  ${e}
  <i class="fa-regular fa-circle-xmark" onclick="removeTag(this.parentElement.value, app), this.parentElement.remove()"></i>
  </button>`;
}
// Onclick for the appareil to come in the array and display under the searchbar
