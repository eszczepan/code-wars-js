// Clever

const scramble = (str1, str2) => {
  const occurences = str1.split("").reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
};

// const scramble = (str1, str2) => {
//   const letterCounts = {};

//   for (let i = 0; i < str1.length; i++) {
//     const currentLetter = str1[i];
//     letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
//     letterCounts[currentLetter]++;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     const currentLetter = str2[i];
//     if (letterCounts[currentLetter] > 0) {
//       letterCounts[currentLetter]--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// First thought

// const scramble = (str1, str2) => {
//   const letters = {};
//   let result = true;
//   str1.split("").forEach((l) => (letters[l] = l));
//   str2.split("").forEach((l) => (letters[l] ? null : (result = false)));
//   console.log(letters);
//   return result;
// };

console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
console.log(scramble("jscripts", "javascript")); // false
console.log(scramble("scriptjava'", "javascript")); // true
