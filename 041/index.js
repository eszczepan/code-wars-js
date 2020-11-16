// Reduce

const toCamelCase = (str) =>
  str.split(/-|_/g).reduce((acc, word, index) => {
    return index === 0 ? word : acc + word[0].toUpperCase() + word.slice(1);
  }, "");

// Map

// const toCamelCase = (str) => {
//   return str
//     .split(/-|_/g)
//     .map((word, index) =>
//       index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// };

// For loop

// const toCamelCase = (str) => {
//   let camelCaseWord = words[0];
//   for (let i = 1; i < words.length; i++) {
//     const word = words[i];
//     console.log(word);
//     camelCaseWord += word[0].toUpperCase() + word.slice(1);
//   }
//   return camelCaseWord;
// };

console.log(toCamelCase("")); // ""
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // "ABC"
console.log(toCamelCase("I-am-a-programmer")); // "IAmAProgrammer"
