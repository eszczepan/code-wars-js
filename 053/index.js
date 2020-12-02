const cakes = (recipe, available) =>
  Object.keys(recipe).reduce((acc, ingredient) => {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      acc
    );
  }, Infinity);

// function cakes(recipe, available) {
//   let numOfCakes = Infinity;
//   for (ingredient in recipe) {
//     const amountAvailable = available[ingredient];
//     if (amountAvailable) {
//       const amountPerCake = recipe[ingredient];
//       const possibleNumOfCakes = Math.floor(amountAvailable / amountPerCake);
//       if (possibleNumOfCakes == 0) return 0;
//       if (possibleNumOfCakes < numOfCakes) {
//         numOfCakes = possibleNumOfCakes;
//       }
//     } else {
//       return 0;
//     }
//   }
//   return numOfCakes;
// }

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); // should return 2

console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
); // should return 0
