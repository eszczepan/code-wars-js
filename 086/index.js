const distribute = (m, n) =>
  n <= 0
    ? []
    : m <= 0
    ? Array(n).fill(0)
    : Array.from({ length: n }, (el, i) =>
        i < m % n ? Math.floor(m / n) + 1 : Math.floor(m / n)
      );

// function distribute(m, n) {
//   if (n <= 0) return [];
//   const candies = Array(n).fill(0);
//   if (m <= 0) return candies;
//   const minCandies = Math.floor(m / n);
//   return candies.map((el, i) => (i < m % n ? minCandies + 1 : minCandies));
// }

// function distribute(m, n) {
//   if (n <= 0) return [];
//   // const candies = Array.from({ length: n }).fill(0);
//   // const candies = Array.from({ length: n }, () => 0);
//   const candies = Array(n).fill(0);
//   if (m <= 0) return candies;
//   const fillCandies = () => {
//     for (let i = 0; i < candies.length; i++) {
//       candies[i]++;
//       m--;
//       if (m === 0) break;
//     }
//   };
//   while (m > 0) {
//     fillCandies();
//   }
//   return candies;
// }

console.log(
  distribute(-5, 10).sort((a, b) => a - b),
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
console.log(
  distribute(0, 10).sort((a, b) => a - b),
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
console.log(
  distribute(5, 10).sort((a, b) => a - b),
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
);
console.log(
  distribute(10, 10).sort((a, b) => a - b),
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
);
console.log(
  distribute(15, 10).sort((a, b) => a - b),
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
);
console.log(distribute(-5, 0), []);
console.log(distribute(0, 0), []);
console.log(distribute(5, 0), []);
console.log(distribute(10, 0), []);
console.log(distribute(15, 0), []);
console.log(distribute(-5, -5), []);
console.log(distribute(0, -5), []);
console.log(distribute(5, -5), []);
console.log(distribute(10, -5), []);
console.log(distribute(15, -5), []);
