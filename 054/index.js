const squareDigits = (num) =>
  +num
    .toString()
    .split("")
    .map((n) => n * n)
    .join("");

console.log(squareDigits(9119), 811181);
console.log(squareDigits(2112), 4114);
