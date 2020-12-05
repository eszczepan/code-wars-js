// while
// const squareDigits = (num) => {
//   let result = "";
//   while (num > 0) {
//     let digit = num % 10;
//     let squaredDigit = Math.pow(digit, 2);
//     result = result + squaredDigit;
//     num = Math.floor(num / 10);
//   }
//   return +result;
// };

const squareDigits = (num) =>
  +num
    .toString()
    .split("")
    .map((n) => n * n)
    .join("");

console.log(squareDigits(9119), 811181);
console.log(squareDigits(2112), 4114);
