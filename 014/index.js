const sumOfN = (n) => {
  const arr = [0];
  for (let i = 1; i <= Math.abs(n); i++) {
    n < 0 ? arr.push(arr[i - 1] - i) : arr.push(arr[i - 1] + i);
  }
  return arr;
};

console.log(sumOfN(3)); // [0, 1, 3, 6]
console.log(sumOfN(-4)); // [0, -1, -3, -6, -10]
console.log(sumOfN(1)); // [0, 1]
console.log(sumOfN(0)); // [0]
console.log(sumOfN(10)); // [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
