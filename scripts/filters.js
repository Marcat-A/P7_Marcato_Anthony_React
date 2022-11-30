let searchedArray = recipes;
let taggedArray = [{ ingredients: [], appareils: [], ustensiles: [] }];

let newArray = [];

let ingredientsArray = [];

recipes.forEach((recipe) => {
  recipe.ingredients.forEach((ingredient) => {
    if (!ingredientsArray.includes(ingredient.ingredient.toLowerCase())) {
      ingredientsArray.push(ingredient.ingredient.toLowerCase());
    }
  });
});

let appareils = [];
let ustensiles = recipes.map((recipe) => {
  return recipe.ustensils;
});
let filteredTagArray = [];
let multipleTagsArray = [];

const searchBar = document.getElementById("search");

const searchBarFilter = () => {
  const tags = document.querySelectorAll(".itemSearched");
  console.log(searchedArray.length);
  if (searchBar.value.length > 2 && searchedArray.length == 0) {
    menu.innerHTML = "";
  } else if (searchBar.value.length == 1) {
    return false;
  } else if (
    searchBar.value.length > 2 &&
    searchedArray.length > 1 &&
    finalArray.length > 1
  ) {
    searchedArray = finalArray.filter(
      (el) =>
        el.name.toLowerCase().includes(searchBar.value) ||
        el.description.toLowerCase().includes(searchBar.value)
    );
    displayContent(searchedArray);
  } else if (searchBar.value.length > 2 && searchedArray.length > 1) {
    searchedArray = recipes.filter(
      (el) =>
        el.name.toLowerCase().includes(searchBar.value) ||
        el.description.toLowerCase().includes(searchBar.value)
    );
    displayContent(searchedArray);
  } else if (searchBar.value.length < 3 && tags.length == 0) {
    displayContent();
    searchedArray = recipes;
    finalArray = [];
  } else if (searchBar.value.length == 0 && tags.length > 0) {
    displayContent(finalArray);
  }
};

const tagsFilter = (array) => {
  const tags = document.querySelectorAll(".itemSearched");
  if (tags.length > 1) {
    if (array === ing) {
      for (i = 0; i < array[0].length; i++) {
        console.log(array[0][i], newArray);
        newArray = finalArray.filter((recipe) => {
          return recipe.ingredients.some((r) => {
            return r.ingredient.toLowerCase().includes(array[0][i]);
          });
        });
      }
    } else if (array === app) {
      for (i = 0; i < array[0].length; i++) {
        newArray = finalArray.filter((recipe) => {
          return recipe.appliance.toLowerCase().includes(array[0][i]);
        });
      }
    } else if (array === ust) {
      array.forEach((tag) => {
        newArray = finalArray.filter((recipe) => {
          return recipe.ustensils.some((r) => {
            return r.toLowerCase() == tag;
          });
        });
      });
    }
    displayContent(newArray);
  } else {
    if (array === ing) {
      array[0].forEach((tag) => {
        finalArray = searchedArray.filter((recipe) => {
          return recipe.ingredients.some((r) => {
            return r.ingredient.toLowerCase().includes(tag);
          });
        });
      });
    } else if (array === app) {
      array[0].forEach((tag) => {
        finalArray = searchedArray.filter((recipe) => {
          return recipe.appliance.toLowerCase().includes(tag);
        });
      });
    } else if (array === ust) {
      array[0].forEach((tag) => {
        finalArray = searchedArray.filter((recipe) => {
          return recipe.ustensils.some((r) => {
            return r.toLowerCase() == tag;
          });
        });
      });
    }
    displayContent(finalArray);
  }
};
searchBar.addEventListener("input", searchBarFilter);

const addTag = (array, name) => {
  if (array === ing && !array[0].includes(name.toLowerCase())) {
    addIngredient(name.toLowerCase());
  } else if (array === app && !array[0].includes(name.toLowerCase())) {
    addAppliance(name.toLowerCase());
  } else if (array === ust && !array[0].includes(name.toLowerCase())) {
    addUstencil(name.toLowerCase());
  }
  if (!array[0].includes(name.toLowerCase())) {
    array[0].push(name.toLowerCase());
    tagsFilter(array);
  }
};

const removeTag = (key, array) => {
  const tags = document.querySelectorAll(".itemSearched");
  if (tags.length === 1 && searchBar.value.length < 1) {
    array[0].splice(key, 1);
    finalArray = [];
    searchedArray = recipes;
    displayContent();
  } else if (tags.length === 1 && searchBar.value.length > 2) {
    array[0].splice(key, 1);
    finalArray = [];
    searchedArray = recipes;
    searchBarFilter();
    displayContent(searchedArray);
  } else {
    array[0].splice(key, 1);
    tagsFilter(array);
  }
};
