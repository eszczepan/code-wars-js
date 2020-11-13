// Filter
const moveZeros = (arr) => {
  const valuesArr = arr.filter((i) => i !== 0);
  const zerosArr = arr.filter((i) => i === 0);
  return [...valuesArr, ...zerosArr];
};

// Reduce with array.fill()

// const moveZeros = (arr) => {
//   let count = 0;
//   const newArr = arr.reduce((acc, currentItem) => {
//     currentItem !== 0 ? acc.push(currentItem) : count++;
//     return acc;
//   }, []);

//   for (let i = 0; i < count; i++) {
//     newArr.push(0);
//   }
//   return newArr;
// };

// Reduce

// const moveZeros = (arr) => {
//   let count = 0;
//   return arr.reduce((acc, currentItem, index) => {
//     if (currentItem !== 0) {
//       acc[index - count] = currentItem;
//     } else {
//       count++;
//     }
//     return acc;
//   }, new Array(arr.length).fill(0));
// };

// Reversed approach ;o

// const moveZeros = (arr) => {
//   for (let i = arr.length; i >= 0; i--) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }
//   }
//   return arr;
// };

// Other approach

// const moveZeros = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const currentItem = arr[i];
//     if (currentItem !== 0) {
//       newArr.push(currentItem);
//     } else {
//       count++;
//     }
//   }
//   for (let i = 0; i < count; i++) {
//     newArr.push(0);
//   }
//   return newArr;
// };

// First thought

// const moveZeros = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const currentItem = arr[i];
//     if (currentItem === 0) {
//       arr.splice(i, 1);
//       i = i - 1;
//       count++;
//     }
//   }
//   for (let i = 0; i < count; i++) {
//     arr.push(0);
//   }
//   return arr;
// };

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]
