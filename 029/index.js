const createPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;

// const createPhoneNumber = (numbers) => {
//   let first3 = "";
//   let second3 = "";
//   let rest = "";
//   numbers.map((c, i) => {
//     if (i <= 2) first3 += c;
//     else if (i >= 3 && i <= 5) second3 += c;
//     else rest += c;
//   });

//   return `(${first3}) ${second3}-${rest}`;
// };

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
