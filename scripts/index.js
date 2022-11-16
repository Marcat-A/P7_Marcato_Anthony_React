const menu = document.querySelector(".menu");

const displayContent = (data) => {
  if (!data) {
    menu.innerHTML = recipes
      .map((recipe) => {
        return `<div class="card">
    <div class="image"></div>
    <div class="description">
      <div class="titleTime">
        <h2 class="title">${recipe.name}</h2>
        <span class="time"
          ><i class="fa-regular fa-clock"></i>${recipe.time} min</span
        >
      </div>
      <div class="recette">
        <div class="ingredientsUsed">
          ${recipe.ingredients
            .map((ingredient) => {
              return `<span class="ingredient">${ingredient.ingredient}<span>${
                ingredient.quantity ? ": " + ingredient.quantity : ""
              }${ingredient.unit ? ingredient.unit : ""}</span></span>`;
            })
            .join("")}
        </div>
        <div class="paragraph">
        ${
          recipe.description.length > 200
            ? recipe.description.substring(0, 200) + "..."
            : recipe.description
        }
        </div>
      </div>
    </div>
  </div>`;
      })
      .join("");
  } else {
    menu.innerHTML = data
      .map((recipe) => {
        return `<div class="card">
    <div class="image"></div>
    <div class="description">
      <div class="titleTime">
        <h2 class="title">${recipe.name}</h2>
        <span class="time"
          ><i class="fa-regular fa-clock"></i>${recipe.time} min</span
        >
      </div>
      <div class="recette">
        <div class="ingredientsUsed">
          ${recipe.ingredients
            .map((ingredient) => {
              return `<span class="ingredient">${ingredient.ingredient}<span>${
                ingredient.quantity ? ": " + ingredient.quantity : ""
              }${ingredient.unit ? ingredient.unit : ""}</span></span>`;
            })
            .join("")}
        </div>
        <div class="paragraph">
        ${
          recipe.description.length > 200
            ? recipe.description.substring(0, 200) + "..."
            : recipe.description
        }
        </div>
      </div>
    </div>
  </div>`;
      })
      .join("");
  }
};

const display = () => {
  if (searchedArray.length > 0 && filteredTagArray.length < 1) {
    displayContent(searchedArray);
  } else if (
    searchedArray.length < 1 &&
    filteredTagArray.length > 0 &&
    multipleTagsArray.length < 1
  ) {
    displayContent(filteredTagArray);
  } else if (
    searchedArray.length < 1 &&
    filteredTagArray.length > 0 &&
    multipleTagsArray.length > 0
  ) {
    displayContent(multipleTagsArray);
  } else if (
    searchedArray.length > 0 &&
    filteredTagArray.length > 0 &&
    multipleTagsArray.length < 1
  ) {
    displayContent(finalArray);
  } else if (
    searchedArray.length > 0 &&
    filteredTagArray.length > 0 &&
    multipleTagsArray.length > 0
  ) {
    displayContent(finalArray);
  } else {
    displayContent("");
  }
};

displayContent();
