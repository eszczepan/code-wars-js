const score = (dice) => {
  const dc = [0, 0, 0, 0, 0, 0];
  const tdr = [1000, 200, 300, 400, 500, 600];
  const sdr = [100, 0, 0, 0, 50, 0];
  dice.forEach((el) => dc[el - 1]++);
  return dc.reduce((acc, curr, i) => {
    return acc + (curr >= 3 ? tdr[i] : 0) + sdr[i] * (curr % 3);
  }, 0);
};

// const score = (dice) => {
//   let result = 0;
//   const store = {};
//   for (let i = 0; i < dice.length; i++) {
//     const curr = dice[i];
//     store[curr] ? store[curr]++ : (store[curr] = 1);
//   }
//   for (const num in store) {
//     const amount = store[num];
//     if (+num === 1) {
//       if (amount >= 3) result += 1000;
//       if (amount > 3) result += (amount - 3) * 100;
//       if (amount < 3) result += amount * 100;
//     }
//     if (+num === 6 && amount >= 3) result += 600;
//     if (+num === 5) {
//       if (amount >= 3) result += 500;
//       if (amount > 3) result += (amount - 3) * 50;
//       if (amount < 3) result += amount * 50;
//     }
//     if (+num === 4 && amount >= 3) result += 400;
//     if (+num === 3 && amount >= 3) result += 300;
//     if (+num === 2 && amount >= 3) result += 200;
//   }
//   return result;
// };

console.log(score([2, 3, 4, 6, 2]), "Should be 0");
console.log(score([4, 4, 4, 3, 3]), "Should be 400");
console.log(score([2, 4, 4, 5, 4]), "Should be 450");
