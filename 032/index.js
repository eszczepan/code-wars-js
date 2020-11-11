const solution = (number) => {
  const translate = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    600: "DC",
    900: "CM",
    1000: "M",
  };
  let roman = "";
  const keys = Object.keys(translate);
  while (number > 0) {
    for (let i = keys.length - 1; i >= 0; i--) {
      let romanLetter = keys[i];
      if (number >= romanLetter) {
        while (number >= romanLetter) {
          roman += translate[romanLetter];
          number -= romanLetter;
        }
        keys.pop();
        break;
      }
    }
  }
  return roman;
};

console.log(solution(1)); // I
console.log(solution(4)); // IV
console.log(solution(9)); // IX
console.log(solution(10)); // X
// console.log(solution(19)); // XIX
// console.log(solution(1001)); // MI
// console.log(solution(1666)); // MDCLXVI
// console.log(solution(1990)); // MCMXC
// console.log(solution(2020)); // MMXX
