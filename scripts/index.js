const menu = document.querySelector(".menu");
// Get the part for including HTML

menu.innerHTML = recipes
  .map((recipe) => {
    //Map the array for display
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
              // Map the array in the ingredients
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
