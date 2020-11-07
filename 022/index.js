// One loop

// const pigIt = (str) => {
//   let pigLatin = "";
//   let firstLetter = str[0];
//   for (let i = 1; i < str.length; i++) {
//     const currentLetter = str[i];
//     if (!firstLetter) firstLetter = currentLetter;
//     else {
//       if (currentLetter !== " ") {
//         pigLatin += currentLetter;
//       } else {
//         pigLatin += firstLetter + "ay ";
//         firstLetter = "";
//       }
//     }
//   }
//   pigLatin += firstLetter + "ay";
//   return pigLatin;
// };

// First thought

const pigIt = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.match(/^[.,:!?]/)
        ? word
        : `${word.slice(1)}${word.charAt(0)}ay`;
    })
    .join(" ");
};

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("This is my string")); // hisTay siay ymay tringsay
