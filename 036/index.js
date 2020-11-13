const digital_root = (n) => ((n - 1) % 9) + 1;

// const digital_root = (n) => {
//   while (n > 9) {
//     let sum = 0;
//     while (n > 0) {
//       const lastDigit = n % 10;
//       n = Math.floor(n / 10);
//       sum += lastDigit;
//     }
//     n = sum;
//   }
//   return n;
// };

// const digital_root = (n) => {
//   while (n >= 10) {
//     n = n
//       .toString()
//       .split("")
//       .reduce((acc, digit) => acc + +digit, 0);
//   }
//   return n;
// };

// const digital_root = (n) => {
//   let number = n;
//   while (number >= 10) {
//     number
//       .toString()
//       .split("")
//       .reduce((acc, n) => {
//         acc += +n;
//         return (number = acc);
//       }, 0);
//   }
//   return number;
// };

console.log(digital_root(16)); // 7
console.log(digital_root(456)); //6
