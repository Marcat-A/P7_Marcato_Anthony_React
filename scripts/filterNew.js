let taggedArray = [{ ingredients: [], appareils: [], ustensiles: [] }];
const searchBar = document.getElementById("search");

const ingredients = taggedArray.map((ingredient) => {
  return ingredient.ingredients;
});
const appareils = taggedArray.map((appareil) => {
  return appareil.appareils;
});
const ustensiles = taggedArray.map((ustensile) => {
  return ustensile.ustensiles;
});

const searchBarFilter = () => {
  if (searchBar.value.length > 2) {
    finalArray = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchBar.value) ||
        recipe.description.toLowerCase().includes(searchBar.value)
    );
  } else {
    finalArray.length = 0;
  }
  display();
};
// Filtre de la searchbar
searchBar.addEventListener("input", searchBarFilter);
// Event

const addTag = (array, name) => {
  if (array === ingredients && !array[0].includes(name.toLowerCase())) {
    addIngredient(name.toLowerCase());
  } else if (array === appareils && !array[0].includes(name.toLowerCase())) {
    addAppliance(name.toLowerCase());
  } else if (array === ustensiles && !array[0].includes(name.toLowerCase())) {
    addUstencil(name.toLowerCase());
  }
  if (!array[0].includes(name.toLowerCase())) {
    array[0].push(name.toLowerCase());
    tagsFilter();
  }
};
// Ajout d'un tag

const removeTag = (key, array) => {
  const tags = document.querySelectorAll(".itemSearched");
  if (tags.length === 0) {
    filteredTagArray = [];
    multipleTagsArray = [];
  }
  if (tags.length === 1) {
    multipleTagsArray = [];
  }
  array[0].splice(key, 1);
  tagsFilter();
};
// Suppression d'un tag

const tagsFilter = () => {
  finalArray = searchedArray.filter((recipe) => {
    return console.log(recipe);
  });
};
// Filtre avec les tags
