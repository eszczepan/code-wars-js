// filter

function findOutlier(integers) {
  const evens = integers.filter((i) => i % 2 === 0);
  const odds = integers.filter((i) => i % 2 !== 0);
  return odds.length === 1 ? odds[0] : evens[0];
}

// reduce

// function findOutlier(integers) {
//   const { odds, evens } = integers.reduce(
//     ({ odds, evens }, currentValue) => {
//       if (currentValue % 2 === 0) evens.push(currentValue);
//       else odds.push(currentValue);
//       return { odds, evens };
//     },
//     {
//       odds: [],
//       evens: [],
//     }
//   );
//   return odds.length === 1 ? odds[0] : evens[0];
// }

// forEach

// function findOutlier(integers) {
//   const odds = [];
//   const evens = [];
//   integers.forEach((i) => (i % 2 === 0 ? evens.push(i) : odds.push(i)));
//   return odds.length === 1 ? odds[0] : evens[0];
// }

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
