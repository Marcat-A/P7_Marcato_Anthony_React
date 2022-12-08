let searchedArray = recipes;
let arrayOfTags = recipes;
// Initialise the array

let taggedArray = [{ ingredients: [], appareils: [], ustensiles: [] }];
// Initialise the array of tags

const searchBar = document.getElementById("search");
// Get the search bar

const searchBarFilter = () => {
  const tags = document.querySelectorAll(".itemSearched");
  // Get tags
  if (searchBar.value.length > 2 && searchedArray.length === 0) {
    menu.innerHTML = "";
  } else if (
    searchBar.value.length > 2 &&
    searchedArray.length >= 1 &&
    tags.length > 0
  ) {
    searchedArray = [];
    for (el in arrayOfTags) {
      if (
        arrayOfTags[el].name
          .toLowerCase()
          .includes(searchBar.value.toLowerCase()) ||
        arrayOfTags[el].description
          .toLowerCase()
          .includes(searchBar.value.toLowerCase())
      ) {
        searchedArray.push(recipes[el]);
      }
    }
  } else if (
    searchBar.value.length > 2 &&
    searchedArray.length >= 1 &&
    tags.length === 0
  ) {
    searchedArray = [];
    for (el in recipes) {
      if (
        recipes[el].name
          .toLowerCase()
          .includes(searchBar.value.toLowerCase()) ||
        recipes[el].description
          .toLowerCase()
          .includes(searchBar.value.toLowerCase())
      ) {
        searchedArray.push(recipes[el]);
      }
    }
  } else if (searchBar.value.length < 3 && tags.length === 0) {
    searchedArray = recipes;
  } else if (searchBar.value.length < 3 && tags.length > 0) {
    searchedArray = arrayOfTags;
  }

  displayContent(searchedArray);
  return searchedArray;
};

// const searchBarFilter = () => {
//   const tags = document.querySelectorAll(".itemSearched");
//   // Get tags
//   if (searchBar.value.length > 2 && searchedArray.length === 0) {
//     menu.innerHTML = "";
//   } else if (
//     searchBar.value.length > 2 &&
//     searchedArray.length >= 1 &&
//     tags.length > 0
//   ) {
//     searchedArray = arrayOfTags.filter(
//       (el) =>
//         el.name.toLowerCase().includes(searchBar.value) ||
//         el.description.toLowerCase().includes(searchBar.value)
//     );
//   } else if (
//     searchBar.value.length > 2 &&
//     searchedArray.length >= 1 &&
//     tags.length === 0
//   ) {
//     searchedArray = recipes.filter(
//       (el) =>
//         el.name.toLowerCase().includes(searchBar.value) ||
//         el.description.toLowerCase().includes(searchBar.value)
//     );
//   } else if (searchBar.value.length < 3 && tags.length === 0) {
//     searchedArray = recipes;
//   } else if (searchBar.value.length < 3 && tags.length > 0) {
//     searchedArray = arrayOfTags;
//   }

//   displayContent(searchedArray);
//   return searchedArray;
// };

searchBar.addEventListener("input", searchBarFilter);
// Listen the search bar

const tagsFilter = (tagArray, searchedArray) => {
  const tags = document.querySelectorAll(".itemSearched");
  // Get tags
  arrayOfTags = searchedArray;
  // Initialise
  if (tags.length >= 1) {
    // If tags
    if (tagArray === ing) {
      // If ingredients
      for (i = 0; i < tagArray[0].length; i++) {
        arrayOfTags = arrayOfTags.filter((recipe) => {
          return recipe.ingredients.some((r) => {
            return r.ingredient.toLowerCase().includes(tagArray[0][i]);
          });
        });
      }
    } else if (tagArray === app) {
      // If appareils
      for (i = 0; i < tagArray[0].length; i++) {
        arrayOfTags = arrayOfTags.filter((recipe) => {
          return recipe.appliance.toLowerCase().includes(tagArray[0][i]);
        });
      }
    } else if (tagArray === ust) {
      // If ustensils
      for (i = 0; i < tagArray[0].length; i++) {
        arrayOfTags = arrayOfTags.filter((recipe) => {
          return recipe.ustensils.includes(tagArray[0][i]);
        });
      }
    }
    searchedArray = arrayOfTags;
    // Synchronise
    return arrayOfTags;
  } else {
    return searchedArray;
  }
};

const addTag = (tagArray, name) => {
  if (tagArray === ing && !tagArray[0].includes(name.toLowerCase())) {
    addIngredient(name.toLowerCase());
    filterIng(name.toLowerCase(), false);
    displayIngredients();
  } else if (tagArray === app && !tagArray[0].includes(name.toLowerCase())) {
    addAppliance(name.toLowerCase());
    filterApp(name.toLowerCase(), false);
    displayAppareils();
  } else if (tagArray === ust && !tagArray[0].includes(name.toLowerCase())) {
    addUstencil(name.toLowerCase());
    filterUst(name.toLowerCase(), false);
    displayUstensils();
    // Add the tag, then filter for removing the one selected and display the new tags
  }
  if (!tagArray[0].includes(name.toLowerCase())) {
    // If the tag not in the array
    tagArray[0].push(name.toLowerCase());
    // Push the tag in the array of tags
    searchedArray = searchBarFilter();
    // Initialise the array of search
    tagsFilter(tagArray, searchedArray);
    // Filter with tags
    displayContent(arrayOfTags);
    // Display the result
  }
};

const removeTag = (key, tagArray) => {
  let val = tagArray[0][key];
  // Get the specified tag
  tagArray[0].splice(key, 1);
  // Then remove it from the array
  if (tagArray[0].length === 0 && searchBar.value.length < 3) {
    searchedArray = recipes;
    // If no tags and no search return the recipes
  }
  arrayOfTags = tagsFilter(tagArray, searchedArray);
  displayContent(arrayOfTags);
  // Display the result of functions
  if (tagArray === ing) {
    filterIng(val, true);
    displayIngredients();
  }
  if (tagArray === app) {
    filterApp(val, true);
    displayAppareils();
  }
  if (tagArray === ust) {
    filterUst(val, true);
    displayUstensils();
  }
  // Then filter the tags and display new tags without the one selected
};
