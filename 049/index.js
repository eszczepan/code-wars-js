// reduce

const narcissistic = (value) =>
  [...value.toString()].reduce((sum, digit, i, { length }) => {
    sum + Math.pow(digit, length);
  }, 0) === value;

// while

// const narcissistic = (value) => {
//   const length = Math.floor(Math.log10(Math.abs(value))) + 1;
//   let sum = 0;
//   let digits = value;
//   while (digits > 0) {
//     const digit = digits % 10;
//     sum += Math.pow(digit, length);
//     digits = Math.floor(digits / 10);
//   }
//   return sum === value;
// };

// for loop

// function narcissistic(value) {
//   const valueStr = value.toString();
//   const power = valueStr.length;
//   let sum = 0;
//   for (let i = 0; i < power; i++) {
//     digit = +valueStr[i];
//     sum += digit ** power;
//   }
//   return sum === value;
// }

console.log(narcissistic(7), true, "7 is narcissistic");
console.log(narcissistic(371), true, "371 is narcissistic");
console.log(narcissistic(1652), false, "1652 is not narcissistic");
