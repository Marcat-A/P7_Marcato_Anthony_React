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

const tagsFilter = (tag) => {
  if (taggedArray.length === 1) {
    filteredTagArray = recipes.filter((recipe) => {
      return recipe.ingredients.some((r) => {
        return r.ingredient.toLowerCase().includes(tag);
      });
    });
    finalArray = searchedArray.filter((el) => {
      return filteredTagArray.some((f) => {
        return f.id === el.id;
      });
    });
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
  if (!array[0].includes(name)) {
    array[0].push(name.toLowerCase());
    console.log(taggedArray, ingredients);
  }
  //   const tags = document.querySelectorAll(".itemSearched");
  //   tags.forEach((tag) => {
  //     if (!taggedArray.includes(tag.innerText.toLowerCase())) {
  //       taggedArray.push(tag.innerText.toLowerCase());
  //       tagsFilter(tag.innerText.toLowerCase());
  //     }
  //   });
};

const removeTag = (key, array) => {
  array[0].splice(key, 1);
  console.log(array);
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
