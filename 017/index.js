const sumPairs = (ints, sum) => {
  seenNumbers = {};
  for (let i = 0; i < ints.length; i++) {
    const currentNumber = ints[i];
    const needInt = sum - currentNumber;

    if (seenNumbers[needInt]) {
      return [needInt, currentNumber];
    } else {
      seenNumbers[currentNumber] = true;
    }
  }
};

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
console.log(sumPairs([20, -13, 40], -7)); // undefined
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
