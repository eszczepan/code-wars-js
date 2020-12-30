const isSquare = (n) => Number.isInteger(n ** (1 / 2));

// const isSquare = (n) => Number.isInteger(Math.sqrt(n));

// const isSquare = (n) => {
//   if (n === 0 || n === 1) return true;
//   return Number.isInteger(Math.sqrt(n));
// };

// const isSquare = (n) => {
//   for (let i = 0; i <= n / 2; i++) {
//     if (i * i === n) return true;
//   }
//   return false;
// };

console.log(
  isSquare(-1),
  false,
  "-1: Negative numbers cannot be square numbers"
);
console.log(isSquare(0), true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "3 is not a square number");
console.log(isSquare(4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");
