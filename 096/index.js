function isPangram(str) {
  const newStr = str.toLowerCase().match(/[a-z]/g);
  const unique = new Set(newStr);
  return unique.size === 26;
}

// function isPangram(str) {
//   return "abcdefghijklmnopqrstuvwxyz"
//     .split("")
//     .every((x) => str.toLowerCase().includes(x));
// }

// function isPangram(str) {
//   const allLetters = {};
//   for (let i = 97; i <= 122; i++) {
//     allLetters[String.fromCharCode(i)] = true;
//   }

//   for (let i = 0; i < str.length; i++) {
//     const currLetter = str[i].toLowerCase();
//     delete allLetters[currLetter];
//   }
//   console.log(Object.keys(allLetters).length);
//   return Object.keys(allLetters).length === 0;
// }

const string1 = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string1), true);
const string2 = "This is not a pangram.";
console.log(isPangram(string2), false);
