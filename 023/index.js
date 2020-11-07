// Smarter

// const uniqueSum = (lst) => [...new Set(lst)].reduce((a, b) => a + b, null);

// Second thought

const uniqueSum = (lst) => {
  let obj = {};
  return lst.reduce((acc, num) => {
    if (!obj[num]) {
      acc += num;
      obj[num] = num;
    }
    return acc;
  }, null);
};

// First thought

// const uniqueSum = (lst) => {
//   let obj = {};
//   return lst.length === 0
//     ? null
//     : lst.reduce((acc, num) => {
//         if (!obj[num]) {
//           acc += num;
//           obj[num] = num;
//         }
//         return acc;
//       }, 0);
// };

console.log(uniqueSum([1, 2, 3])); // 6
console.log(uniqueSum([1, 3, 8, 1, 8])); // 12
console.log(uniqueSum([-1, -1, 5, 2, -7])); // -1
console.log(uniqueSum([])); // null
