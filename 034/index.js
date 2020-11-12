const isTriangular = (t) => {
  let sum = 0;
  for (i = 1; i <= t; i++) {
    sum += i;
    if (sum === t) return true;
  }
  return false;
};

// const isTriangular = (t) => Number.isInteger((1 + (t << 3)) ** 0.5);

console.log(isTriangular(1)); // true
console.log(isTriangular(6)); // true
console.log(isTriangular(10)); // true
console.log(isTriangular(15)); // true
console.log(isTriangular(28)); // true
console.log(isTriangular(2)); // false
console.log(isTriangular(7)); // false
console.log(isTriangular(14)); // false
console.log(isTriangular(27)); // false
