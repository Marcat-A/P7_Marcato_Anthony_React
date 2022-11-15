let searchedArray = [];
let taggedArray = [];
const searchBar = document.getElementById("search");

const searchBarFilter = () => {
  searchedArray = recipes.filter(
    (el) =>
      el.name.toLowerCase().includes(searchBar.value) ||
      el.description.toLowerCase().includes(searchBar.value)
  );
};

const tagsFilter = () => {};

searchBar.addEventListener("input", searchBarFilter);

const addTag = () => {
  const tags = document.querySelectorAll(".itemSearched");
  tags.forEach((tag) => {
    if (!taggedArray.includes(tag.innerText)) {
      taggedArray.push(tag.innerText);
    }
  });
};
