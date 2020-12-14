// function orderWeight(str) {
//   const sumDigits = (num) =>
//     Array.prototype.reduce.call(
//       num.toString(),
//       (acc, digit) => acc + +digit,
//       0
//     );
//   return str
//     .split(" ")
//     .sort((a, b) => {
//       const weightA = sumDigits(a);
//       const weightB = sumDigits(b);
//       return weightA < weightB
//         ? -1
//         : weightA > weightB
//         ? 1
//         : a < b
//         ? -1
//         : a > b
//         ? 1
//         : 0;
//     })
//     .join(" ");
// }

function orderWeight(str) {
  const sumDigits = (num) =>
    num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + +digit, 0);
  return str
    .split(" ")
    .sort((a, b) => {
      const weightA = sumDigits(a);
      const weightB = sumDigits(b);
      if (weightA < weightB) return -1;
      else if (weightA > weightB) return 1;
      else if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    })
    .join(" ");
}

console.log(orderWeight("103 123 4444 99 2000")); //"2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); //  "11 11 2000 10003 22 123 1234000 44444444 9999"
