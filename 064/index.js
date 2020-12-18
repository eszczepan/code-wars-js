// function firstNonRepeatingLetter(s) {
//   const counts = Array.prototype.reduce.call(
//     s,
//     (counts, letter) => {
//       letter = letter.toLowerCase();
//       counts[letter] = counts[letter] || 0;
//       counts[letter]++;
//       return counts;
//     },
//     {}
//   );
//   return (
//     Array.prototype.find.call(s, (letter) => {
//       return counts[letter.toLowerCase()] == 1;
//     }) || ""
//   );
// }

function firstNonRepeatingLetter(s) {
  const letters = {};
  s.split("").forEach((l) => {
    l = l.toLowerCase();
    if (!letters[l]) letters[l] = 1;
    else letters[l]++;
  });
  return (
    Array.prototype.find.call(s, (letter) => {
      return letters[letter.toLowerCase()] == 1;
    }) || ""
  );
}

console.log(firstNonRepeatingLetter("a"), "a");
console.log(firstNonRepeatingLetter("stress"), "t");
console.log(firstNonRepeatingLetter("moonmen"), "e");
console.log(firstNonRepeatingLetter("sTreSS"), "T");
