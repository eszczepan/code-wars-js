const a = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const b = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

const fn = (arrayA, arrayB) => {
  const arrayC = [];
  const countInt = {};
  const isPrime = (num) => {
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i !== 0) return true;
  };

  arrayB.forEach((int) => {
    countInt[int] = ++countInt[int] || 1;
  });

  arrayA.forEach((int) => {
    if (countInt[int] && isPrime(countInt[int]) === true) return;
    arrayC.push(int);
  });

  return arrayC;
};

console.log(fn(a, b));
