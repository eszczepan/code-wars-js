// Replace - one iteration

const correct = (string) => {
  const correctLetters = { 5: "S", 0: "O", 1: "I" };
  return string.replace(/5|0|1/g, (letter) => correctLetters[letter]);
};

// Replace - multiple iteration

// const correct = (string) =>
//   string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");

// const correct = (string) => {
//   string = string.replace(/5/g, "S");
//   string = string.replace(/0/g, "O");
//   string = string.replace(/1/g, "I");
//   return string;
// };

// With split

// const correct = (string) =>
//   string
//     .split("")
//     .map((c) => (c === "5" ? "S" : c === "0" ? "O" : c === "1" ? "I" : c))
//     .join("");

// const correct = (string) =>
//   string
//     .split("")
//     .map((c) => {
//       if (c === "5") return "S";
//       else if (c === "0") return "O";
//       else if (c === "1") return "I";
//       else return c;
//     })
//     .join("");

console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");
