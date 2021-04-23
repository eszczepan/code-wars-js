const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

// some fun reduce
// const minMax = (arr) =>
//   arr.reduce(
//     (acc, num) => {
//       num < acc[0] ? (acc[0] = num) : null;
//       num > acc[1] ? (acc[1] = num) : null;
//       return acc;
//     },
//     [Infinity, -Infinity]
//   );

// still boring forEach
// function minMax(arr) {
//   const result = [Infinity, -Infinity];
//   arr.forEach((n) => {
//     if (n < result[0]) result[0] = n;
//     if (n > result[1]) result[1] = n;
//   });
//   return result;
// }

// classic for loop
// function minMax(arr) {
//   const result = [Infinity, -Infinity];
//   for (let i = 0; i < arr.length; i++) {
//     const curr = arr[i];
//     if (curr < result[0]) result[0] = curr;
//     if (curr > result[1]) result[1] = curr;
//   }
//   return result;
// }

console.log([1, 2, 3, 4, 5], [1, 5]);
console.log([2334454, 5], [5, 2334454]);
