// Filter

const iqTest = (numbers) => {
  const numArr = numbers.split(" ");
  const even = numArr.filter((n) => n % 2);
  const odd = numArr.filter((n) => !(n % 2));
  return even.length === 1
    ? numArr.indexOf(even[0]) + 1
    : numArr.indexOf(odd[0]) + 1;
};

// Arrays over the objects

// const iqTest = (numbers) => {
//   const even = [];
//   const odd = [];
//   const numArr = numbers.split(" ");
//   numArr.forEach((n) => (n % 2 === 0 ? even.push(n) : odd.push(n)));
//   return even.length === 1
//     ? numArr.indexOf(even[0]) + 1
//     : numArr.indexOf(odd[0]) + 1;
// };

// Objects over the arrays

// const iqTest = (numbers) => {
//   let even = {
//     count: 0,
//     lastIndex: 0,
//   };
//   let odd = 0;

//   numbers.split(" ").forEach((n, i) => {
//     if (n % 2 === 0) {
//       even.count++;
//       even.lastIndex = i + 1;
//     } else {
//       odd = i + 1;
//     }
//   });
//   return even.count === 1 ? even.lastIndex : odd;
// };

// Second thought :)

// const iqTest = (numbers) => {
//   let even = [0, 0];
//   let odd = 0;

//   numbers.split(" ").forEach((n, i) => {
//     if (n % 2 === 0) {
//       even[0]++;
//       even[1] = i + 1;
//     } else {
//       odd = i + 1;
//     }
//   });
//   return even[0] === 1 ? even[1] : odd;
// };

// First thought

// const iqTest = (numbers) => {
//   let even = 0;
//   let odd = 0;
//   const arrNum = numbers.split(" ");
//   arrNum.forEach((n) => {
//     n % 2 === 0 ? even++ : odd++;
//   });
//   arrNum.forEach((n, i) => {
//     if (even < 2 && n % 2 === 0) return (index = i + 1);
//     if (odd < 2 && n % 2 !== 0) return (index = i + 1);
//   });
//   return index;
// };

console.log(iqTest("2 4 7 8 10")); // 3
console.log(iqTest("1 2 2")); // 1
