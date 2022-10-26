const searchInput = document.getElementById("search");

const filterData = (e) => {
  menu.innerHTML = "";
  const searchedString = e.target.value.toLowerCase();
  const filterArr = recipes.filter(
    (el) =>
      el.name.toLowerCase().includes(searchedString) ||
      el.description.toLowerCase().includes(searchedString)
  );
  menu.innerHTML = filterArr
    .map((filtered) => {
      //Map the array for display
      return `<div class="card">
        <div class="image"></div>
        <div class="description">
          <div class="titleTime">
            <h2 class="title">${filtered.name}</h2>
            <span class="time"
              ><i class="fa-regular fa-clock"></i>${filtered.time} min</span
            >
          </div>
          <div class="recette">
            <div class="ingredientsUsed">
              ${filtered.ingredients
                .map((ingredient) => {
                  // Map the array in the ingredients
                  return `<span class="ingredient">${
                    ingredient.ingredient
                  }<span>${
                    ingredient.quantity ? ": " + ingredient.quantity : ""
                  }${ingredient.unit ? ingredient.unit : ""}</span></span>`;
                })
                .join("")}
            </div>
            <div class="paragraph">
            ${
              filtered.description.length > 200
                ? filtered.description.substring(0, 200) + "..."
                : filtered.description
            }
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");
};

searchInput.addEventListener("input", filterData);
