// function spinWords(str) {
//   let result = "";
//   const splitStr = str.split(" ");

//   for (let i = 0; i < splitStr.length; i++) {
//     const currentWord = splitStr[i];
//     if (currentWord.length >= 5) {
//       result += currentWord.split("").reverse().join("") + " ";
//     } else {
//       result += currentWord + " ";
//     }
//   }
//   return result.trim();
// }

// reduce

const spinWords = (str) =>
  str
    .split(" ")
    .reduce((acc, word) => {
      word.length >= 5
        ? acc.push(word.split("").reverse().join(""))
        : acc.push(word);
      return acc;
    }, [])
    .join(" ");

// const spinWords = (str) =>
//   str
//     .split(" ")
//     .map((w) => (w.length >= 5 ? w.split("").reverse().join("") : w))
//     .join(" ");

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
