const duplicateCount = (text) => {
  const counts = {};
  const duplicates = {};
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    if (counts[letter] > 1 && !duplicates[letter]) {
      result++;
      duplicates[letter] = true;
    }
  }
  return result;
};

// const duplicateCount = (text) => {
//   const letters = {};
//   let result = 0;
//   for (let i = 0; i < text.length; i++) {
//     const letter = text[i].toLowerCase();
//     if (!letters[letter]) {
//       letters[letter] = 0;
//     }
//     letters[letter]++;
//   }
//   for (letter in letters) {
//     letters[letter] > 1 ? result++ : null;
//   }
//   return result;
// };

// const duplicateCount = (text) => {
//   const letters = {};
//   let result = 0;
//   text.split("").map((l) => {
//     const letter = l.toLowerCase();
//     letters[letter] ? letters[letter]++ : (letters[letter] = 1);
//   });
//   for (letter in letters) {
//     letters[letter] > 1 ? result++ : null;
//   }
//   return result;
// };

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2);
