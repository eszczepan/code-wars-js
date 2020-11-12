const getSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

// const getSum = (a, b) => {
//   const begin = Math.min(a, b);
//   const end = Math.max(a, b);
//   let sum = 0;
//   for (let i = begin; i <= end; i++) {
//     sum += i;
//   }
//   return sum;
// };

// const getSum = (a, b) => {
//   let sum = 0;
//   let begin;
//   let end;
//   if (a < b) {
//     begin = a;
//     end = b;
//   } else {
//     begin = b;
//     end = a;
//   }
//   for (let i = begin; i <= end; i++) {
//     sum += i;
//   }
//   return sum;
// };

console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(-1, 2)); // 2
