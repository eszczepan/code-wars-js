const solution = (number) =>
  number < 0
    ? 0
    : new Array(number).fill(0).reduce((acc, n, i) => {
        if (i % 3 === 0 || i % 5 === 0) acc += i;
        return acc;
      }, 0);

// const solution = (number) => {
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }
//   return sum;
// };

console.log(solution(10)); // 23
