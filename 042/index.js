const countLetters = (w) =>
  Array.prototype.reduce.call(
    w,
    (acc, letter) => {
      letter = letter.toLowerCase();
      acc[letter] = acc[letter] || 0;
      acc[letter]++;
      return acc;
    },
    {}
  );

const looseEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  else return Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
};

// Filter

const anagrams = (word, words) =>
  words.filter((w) => looseEqual(countLetters(word), countLetters(w)));

// For loop

// const anagrams = (word, words) => {
//   const letterCount = countLetters(word);
//   const anagrams = [];
//   for (let i = 0; i < words.length; i++) {
//     const currentWord = words[i];
//     const currentWordLetterCount = countLetters(currentWord);
//     if (looseEqual(currentWordLetterCount, letterCount))
//       anagrams.push(currentWord);
//   }
//   return anagrams;
// };

// Solutions with sorting

// const anagrams = (word, words) => {
//   const anagrams = [];
//   const sortedWord = (w) => [...w].sort().join("");
//   words.forEach((w) =>
//     sortedWord(w) === sortedWord(word) ? anagrams.push(w) : null
//   );
//   return anagrams;
// };

// const anagrams = (word, words) => {
//   const anagrams = [];
//   const sortedWord = (w) => w.split("").sort().join("");
//   for (let i = 0; i < words.length; i++) {
//     if (sortedWord(words[i]) === sortedWord(word)) anagrams.push(words[i]);
//   }
//   return anagrams;
// };

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); // ['carer', 'racer']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); // [ ]
console.log(anagrams("big", ["bid", "biig", "dib", "gig"])); // []
