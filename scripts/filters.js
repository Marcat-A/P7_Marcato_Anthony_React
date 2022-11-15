let searchedArray = [];
let taggedArray = [];
let filteredTagArray = [];
let multipleTagsArray = [];
const searchBar = document.getElementById("search");

const searchBarFilter = () => {
  if (searchBar.value.length > 2) {
    searchedArray = recipes.filter(
      (el) =>
        el.name.toLowerCase().includes(searchBar.value) ||
        el.description.toLowerCase().includes(searchBar.value)
    );
  } else {
    searchedArray = [];
  }
};

const tagsFilter = (tag) => {
  if (taggedArray.length === 1) {
    filteredTagArray = recipes.filter((recipe) => {
      return recipe.ingredients.some((r) => {
        return r.ingredient.toLowerCase().includes(tag);
      });
    });
  } else {
    for (let i = 0; i < taggedArray.length; i++) {
      console.log(taggedArray[i].toLowerCase());
      multipleTagsArray = filteredTagArray.filter((filter) => {
        return filter.ingredients.some((f) => {
          return f.ingredient
            .toLowerCase()
            .includes(taggedArray[i].toLowerCase());
        });
      });
    }
  }
};
searchBar.addEventListener("input", searchBarFilter);

const addTag = () => {
  const tags = document.querySelectorAll(".itemSearched");
  tags.forEach((tag) => {
    if (!taggedArray.includes(tag.innerText.toLowerCase())) {
      taggedArray.push(tag.innerText.toLowerCase());
      tagsFilter(tag.innerText.toLowerCase());
    }
  });
};
