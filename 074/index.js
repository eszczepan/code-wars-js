const alphabetPosition = (text) =>
  text
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((l) => l.toUpperCase().charCodeAt(0) - 64)
    .join(" ");

// const alphabetPosition = (text) =>
//   text
//     .toUpperCase()
//     .split("")
//     .map((l) => l.charCodeAt(0) - 64)
//     .filter((l) => l > 0 && l <= 26)
//     .join(" ");

// const alphabetPosition = (text) => {
//   const numbers = [];
//   for (let i = 0; i < text.length; i++) {
//     const letter = text[i];
//     const number = letter.toUpperCase().charCodeAt(0) - 64;
//     if (number >= 1 && number <= 26) {
//       numbers.push(number);
//     }
//   }
//   return numbers.join(" ");
// };

// const alphabet = {
//   A: 1,
//   B: 2,
//   C: 3,
//   D: 4,
//   E: 5,
//   F: 6,
//   G: 7,
//   H: 8,
//   I: 9,
//   J: 10,
//   K: 11,
//   L: 12,
//   M: 13,
//   N: 14,
//   O: 15,
//   P: 16,
//   Q: 17,
//   R: 18,
//   S: 19,
//   T: 20,
//   U: 21,
//   V: 22,
//   W: 23,
//   X: 24,
//   Y: 25,
//   Z: 26,
// };

// function alphabetPosition(text) {
//   const res = text.split("").reduce((acc, curr) => {
//     upperLetter = curr.toUpperCase();
//     if (alphabet[upperLetter]) acc += alphabet[upperLetter] + " ";
//     return acc;
//   }, "");
//   return res.trim();
// }

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")); //  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
