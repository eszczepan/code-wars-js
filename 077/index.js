// One liner
// const compare = ([base1, exp1], [base2, exp2]) =>
//   Math.log(base1) * exp1 > Math.log(base2) * exp2
//     ? [base1, exp1]
//     : [base2, exp2];

function compare(number1, number2) {
  const [base1, exp1] = number1;
  const [base2, exp2] = number2;

  const one = Math.log(base1) * exp1;
  const two = Math.log(base2) * exp2;
  if (one > two) return number1;
  return number2;
}

console.log(compare([2, 11], [3, 7]), [3, 7]);
console.log(compare([1, 10], [2, 3]), [2, 3]);
console.log(compare([3, 5], [5, 3]), [3, 5]);
console.log(compare([4, 7], [3, 8]), [4, 7]);
console.log(compare([5, 1000], [6, 900]), [6, 900]);
