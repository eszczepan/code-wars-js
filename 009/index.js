//1
const countBits = (n) => {
  let counter = 0;
  const nArr = n.toString(2).split("");
  nArr.forEach((i) => (i === "1" ? counter++ : null));
  return counter;
};

//2
countBits2 = (n) => n.toString(2).split("0").join("").length;

console.log(countBits(1234)); // 5
console.log(countBits2(1234)); // 5
console.log(countBits(3811)); // 8
console.log(countBits2(3811)); // 8
console.log(countBits(77231418)); // 14
console.log(countBits2(77231418)); // 14
