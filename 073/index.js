const digPow = (n, p) => {
  const result = n
    .toString()
    .split("")
    .reduce((acc, curr, index) => acc + Math.pow(curr, p + index), 0);
  return result % n ? -1 : result / n;
};

// function digPow(n, p) {
//   const nArr = n.toString().split("");
//   let result = 0;
//   let power = p;
//   for (let i = 0; i < nArr.length; i++) {
//     result += Math.pow(nArr[i], power);
//     power++;
//   }
//   return result % n ? -1 : result / n;
// }

// function digPow(n, p) {
//   const nArr = n.toString().split("");
//   let result = 0;
//   let power = p;
//   let k = 1;
//   for (let i = 0; i < nArr.length; i++) {
//     result += Math.pow(nArr[i], power);
//     power++;
//   }
//   while (n * k < result) {
//     k++;
//   }
//   return k * n === result ? k : -1;
// }

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);
