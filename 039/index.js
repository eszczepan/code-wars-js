const isIsogram = (str) => new Set(str.toLowerCase()).size === str.length;

// const isIsogram = (str) => {
//   const chars = {};
//   return !str.split("").some((letter) => {
//     letter = letter.toLowerCase();
//     if (!chars[letter]) {
//       chars[letter] = 1;
//       return false;
//     } else return true;
//   });
// };

// const isIsogram = (str) => {
//   const chars = {};
//   for (let i = 0; i < str.length; i++) {
//     const currentLetter = str[i].toLowerCase();
//     if (currentLetter === chars[currentLetter]) return false;
//     else chars[currentLetter] = currentLetter;
//   }
//   return true;
// };

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false, "same chars may not be adjacent"
console.log(isIsogram("moOse")); // false, "same chars may not be same case"
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true, "an empty string is a valid isogram"
