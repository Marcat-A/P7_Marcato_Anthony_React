let searchedArray = [];
let taggedArray = [{ ingredients: [], appareils: [], ustensiles: [] }];
let filteredTagArray = [];
let multipleTagsArray = [];
let finalArray = [];
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
    searchedArray = recipes.filter(
      (el) =>
        el.name.toLowerCase().includes(searchBar.value) ||
        el.description.toLowerCase().includes(searchBar.value)
    );
    finalArray = searchedArray.filter((el) => {
      return multipleTagsArray.length > 0
        ? multipleTagsArray.some((f) => {
            return f.id === el.id;
          })
        : filteredTagArray.some((f) => {
            return f.id === el.id;
          });
    });
    display();
  }
};

const tagsFilter = (tag, array) => {
  if (taggedArray.length === 1) {
    if (array === ingredients) {
      filteredTagArray = recipes.filter((recipe) => {
        return recipe.ingredients.some((r) => {
          return r.ingredient.toLowerCase().includes(tag.toLowerCase());
        });
      });
      finalArray = searchedArray.filter((el) => {
        return filteredTagArray.some((f) => {
          return f.id === el.id;
        });
      });
    } else if (array === appareils) {
      filteredTagArray = recipes.filter((recipe) => {
        return recipe.appliance.toLowerCase().includes(tag.toLowerCase());
      });
    } else if (array === ustensiles) {
      filteredTagArray = recipes.filter((recipe) => {
        return recipe.ustensils.some((r) => {
          return r.toLowerCase().includes(tag.toLowerCase());
        });
      });
    }
    display();
  } else {
    for (let i = 0; i < taggedArray.length; i++) {
      multipleTagsArray = filteredTagArray.filter((filter) => {
        return filter.ingredients.some((f) => {
          return f.ingredient
            .toLowerCase()
            .includes(taggedArray[i].toLowerCase());
        });
      });
      //   filteredTagArray.filter((filter) => {
      //     return filter.ustensils.some((f) => {
      //       return multipleTagsArray.push(
      //         f.toLowerCase().includes(taggedArray[i].toLowerCase())
      //       );
      //     });
      //   });
      //   console.log(filteredTagArray);
      //   multipleTagsArray.push(
      //     filteredTagArray[i].appliance.toLowerCase() == tag
      //   );
    }
    finalArray = searchedArray.filter((el) => {
      return multipleTagsArray.some((f) => {
        return f.id === el.id;
      });
    });
    display();
  }
};
searchBar.addEventListener("input", searchBarFilter);

const addTag = (array, name) => {
  if (array === ingredients && !array[0].includes(name.toLowerCase())) {
    addIngredient(name.toLowerCase());
    tagsFilter(name, array);
  } else if (array === appareils && !array[0].includes(name.toLowerCase())) {
    addAppliance(name.toLowerCase());
    tagsFilter(name, array);
  } else if (array === ustensiles && !array[0].includes(name.toLowerCase())) {
    addUstencil(name.toLowerCase());
    tagsFilter(name, array);
  }
  if (!array[0].includes(name.toLowerCase())) {
    array[0].push(name.toLowerCase());
  }
};

const removeTag = (key, array) => {
  array[0].splice(key, 1);
  const tags = document.querySelectorAll(".itemSearched");
  tags.forEach((tag) => {
    tagsFilter(tag.innerText.toLowerCase());
  });
  if (tags.length === 1) {
    filteredTagArray = [];
    multipleTagsArray = [];
  }
  if (tags.length === 2) {
    multipleTagsArray = [];
  }
  display();
};
