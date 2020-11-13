// With findIndex - maybe more performant because the findIndex loop could be broken before end

// const findOdd = (A) => {
//   const numbers = A.reduce((acc, n) => {
//     acc[n] = acc[n] || 0;
//     acc[n]++;
//     return acc;
//   }, {});

//   const numbersKeys = Object.keys(numbers);
//   const oddIndex = numbersKeys.findIndex((n) => {
//     return numbers[n] % 2 !== 0;
//   });
//   return +numbersKeys[oddIndex];
// };

// Reduce

// const findOdd = (A) => {
//   const numbers = A.reduce((acc, n) => {
//     acc[n] ? acc[n]++ : (acc[n] = 1);
//     return acc;
//   }, {});

//   for (const counts in numbers) {
//     if (numbers[counts] % 2 !== 0) return +counts;
//   }
// };

// First thought

// const findOdd = (A) => {
//   const numbers = {};
//   A.forEach((n) => (numbers[n] ? numbers[n]++ : (numbers[n] = 1)));

//   for (const counts in numbers) {
//     if (numbers[counts] % 2 !== 0) return +counts;
//   }
// };

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
