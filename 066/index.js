const duplicateEncode = (word) => {
  let result = "";
  const isDuplicate = Array.prototype.reduce.call(
    word,
    (isDuplicate, letter) => {
      letter = letter.toLowerCase();
      if (letter in isDuplicate) isDuplicate[letter] = true;
      else isDuplicate[letter] = false;
      return isDuplicate;
    },
    {}
  );
  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i].toLowerCase();
    result += !isDuplicate[currentLetter] ? "(" : ")";
  }
  return result;
};

// const duplicateEncode = (word) => {
//   const wordArr = word.split("");
//   const counts = {};
//   let result = "";
//   wordArr.forEach((l) => {
//     counts[l] = counts[l] || 0;
//     counts[l]++;
//   });
//   wordArr.forEach((l) => {
//     result += counts[l] < 2 ? "(" : ")";
//   });
//   return result;
// };

// const duplicateEncode = (word) => {
//   const counts = {};
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     const currentLetter = word[i].toLowerCase();
//     counts[currentLetter] = counts[currentLetter] || 0;
//     counts[currentLetter]++;
//   }

//   for (let i = 0; i < word.length; i++) {
//     const currentLetter = word[i].toLowerCase();
//     result += counts[currentLetter] < 2 ? "(" : ")";
//   }

//   return result;
// };

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");
