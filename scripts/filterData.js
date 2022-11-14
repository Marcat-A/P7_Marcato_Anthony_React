// const searchInput = document.getElementById("search");
// let tags = [];
// const filterData = () => {
//   menu.innerHTML = "";
//   const searchedString = searchInput.value;

//   if (tags.length > 0) {
//     const filterArr = recipes.filter(
//       (el) =>
//         el.name.toLowerCase().includes(searchedString) ||
//         el.description.toLowerCase().includes(searchedString)
//     );
//     const tagsArr = filterArr.ingredients.filter((val) => {
//       for (let i = 0; i < tags.length; i++) {
//         return tags.find((tag) => {
//           return (
//             val.name.toLowerCase().includes(tag) ||
//             val.description.toLowerCase().includes(tag)
//           );
//         });
//       }
//     });
//     menu.innerHTML = tagsArr
//       .map((filtered) => {
//         //Map the array for display
//         return `<div class="card">
//       <div class="image"></div>
//       <div class="description">
//         <div class="titleTime">
//           <h2 class="title">${filtered.name}</h2>
//           <span class="time"
//             ><i class="fa-regular fa-clock"></i>${filtered.time} min</span
//           >
//         </div>
//         <div class="recette">
//           <div class="ingredientsUsed">
//             ${filtered.ingredients
//               .map((ingredient) => {
//                 // Map the array in the ingredients
//                 return `<span class="ingredient">${
//                   ingredient.ingredient
//                 }<span>${
//                   ingredient.quantity ? ": " + ingredient.quantity : ""
//                 }${ingredient.unit ? ingredient.unit : ""}</span></span>`;
//               })
//               .join("")}
//           </div>
//           <div class="paragraph">
//           ${
//             filtered.description.length > 200
//               ? filtered.description.substring(0, 200) + "..."
//               : filtered.description
//           }
//           </div>
//         </div>
//       </div>
//     </div>`;
//       })
//       .join("");
//   } else if (searchInput.value) {
//     const filterArr = recipes.filter(
//       (el) =>
//         el.name.toLowerCase().includes(searchedString) ||
//         el.description.toLowerCase().includes(searchedString)
//     );
//     menu.innerHTML = filterArr
//       .map((filtered) => {
//         //Map the array for display
//         return `<div class="card">
//         <div class="image"></div>
//         <div class="description">
//           <div class="titleTime">
//             <h2 class="title">${filtered.name}</h2>
//             <span class="time"
//               ><i class="fa-regular fa-clock"></i>${filtered.time} min</span
//             >
//           </div>
//           <div class="recette">
//             <div class="ingredientsUsed">
//               ${filtered.ingredients
//                 .map((ingredient) => {
//                   // Map the array in the ingredients
//                   return `<span class="ingredient">${
//                     ingredient.ingredient
//                   }<span>${
//                     ingredient.quantity ? ": " + ingredient.quantity : ""
//                   }${ingredient.unit ? ingredient.unit : ""}</span></span>`;
//                 })
//                 .join("")}
//             </div>
//             <div class="paragraph">
//             ${
//               filtered.description.length > 200
//                 ? filtered.description.substring(0, 200) + "..."
//                 : filtered.description
//             }
//             </div>
//           </div>
//         </div>
//       </div>`;
//       })
//       .join("");
//   } else {
//     menu.innerHTML = recipes
//       .map((filtered) => {
//         //Map the array for display
//         return `<div class="card">
//     <div class="image"></div>
//     <div class="description">
//       <div class="titleTime">
//         <h2 class="title">${filtered.name}</h2>
//         <span class="time"
//           ><i class="fa-regular fa-clock"></i>${filtered.time} min</span
//         >
//       </div>
//       <div class="recette">
//         <div class="ingredientsUsed">
//           ${filtered.ingredients
//             .map((ingredient) => {
//               // Map the array in the ingredients
//               return `<span class="ingredient">${ingredient.ingredient}<span>${
//                 ingredient.quantity ? ": " + ingredient.quantity : ""
//               }${ingredient.unit ? ingredient.unit : ""}</span></span>`;
//             })
//             .join("")}
//         </div>
//         <div class="paragraph">
//         ${
//           filtered.description.length > 200
//             ? filtered.description.substring(0, 200) + "..."
//             : filtered.description
//         }
//         </div>
//       </div>
//     </div>
//   </div>`;
//       })
//       .join("");
//   }
// };

// searchInput.addEventListener("input", filterData);

// const updateArr = () => {
//   while (tags.length > 0) {
//     tags.pop();
//   }
//   document.querySelectorAll(".itemSearched").forEach((tag) => {
//     tags.push(tag.value);
//   });
//   console.log(tags);
//   filterData();
// };
