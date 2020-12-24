const fibonacci = (n, cache = { 0: 0, 1: 1 }) => {
  if (n in cache) return cache[n];
  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  return cache[n];
};

// const fibonacci = (n, cache) => {
//   cache = cache || { 0: 0, 1: 1 };
//   if (n in cache) return cache[n];
//   cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
//   return cache[n];
// };

// const fibonacci = (n, cache = {}) => {
//   if (cache[n]) return cache[n];
//   if (n == 0 || n == 1) {
//     return n;
//   }
//   cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

//   return cache[n];
// };

// const cache = { 0: 0, 1: 1 };

// const fibonacci = (n) => {
//   if (n in cache) return cache[n];

//   cache[n] = fibonacci(n - 1) + fibonacci(n - 2);

//   return cache[n];
// };

// const cache = {};

// const fibonacci = (n) => {
//   if (cache[n]) return cache[n];
//   if (n == 0 || n == 1) {
//     return n;
//   }
//   cache[n] = fibonacci(n - 1) + fibonacci(n - 2);

//   return cache[n];
// };

// const fibonacci = (n) => {
//   if (cache[n]) return cache[n];
//   if (n == 0 || n == 1) {
//     return n;
//   }
//   const n1 = fibonacci(n - 1);
//   cache[n - 1] = n1;

//   const n2 = fibonacci(n - 2);
//   cache[n - 2] = n2;

//   return n1 + n2;
// };

console.log(fibonacci(70)); // 190392490709135
console.log(fibonacci(60)); // 1548008755920
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(30)); // 832040
