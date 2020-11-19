// Reduce

const order = (words) =>
  words
    ? words
        .split(" ")
        .reduce((acc, w) => {
          let digit = w.match(/\d/);
          digit = digit[0];
          acc[digit - 1] = w;
          return acc;
        }, [])
        .join(" ")
    : "";

// Not great, not terrible

// const order = (words) => {
//   if (!words) return "";
//   const wordsArr = words.split(" ");
//   const newArr = [];
//   for (let i = 0; i < wordsArr.length; i++) {
//     const currentWord = wordsArr[i];
//     let digit = currentWord.match(/\d/);
//     digit = digit[0];
//     newArr[digit - 1] = currentWord;
//   }
//   return newArr.join(" ");
// };

// Stupid way

// const order = (words) => {
//   const wordsArr = words.split(" ");
//   const newArr = [];
//   for (let i = 0; i < wordsArr.length; i++) {
//     const currentWord = wordsArr[i];
//     if (currentWord.includes(1)) newArr[0] = currentWord;
//     if (currentWord.includes(2)) newArr[1] = currentWord;
//     if (currentWord.includes(3)) newArr[2] = currentWord;
//     if (currentWord.includes(4)) newArr[3] = currentWord;
//     if (currentWord.includes(5)) newArr[4] = currentWord;
//     if (currentWord.includes(6)) newArr[5] = currentWord;
//     if (currentWord.includes(7)) newArr[6] = currentWord;
//     if (currentWord.includes(8)) newArr[7] = currentWord;
//     if (currentWord.includes(9)) newArr[8] = currentWord;
//   }
//   return newArr.join(" ");
// };

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //  "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); // ""
