function divisors(integer) {
  const results = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      results.push(i);
    }
  }
  return results.length == 0 ? `${integer} is prime` : results;
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
