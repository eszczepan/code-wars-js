// Fancy reduce approach
function deleteNth(arr, n) {
  const photos = {};
  return arr.reduce((acc, value) => {
    photos[value] = photos[value] + 1 || 1;
    photos[value] <= n ? acc.push(value) : null;
    return acc;
  }, []);
}

// Filter approach
// function deleteNth(arr, n) {
//   const photos = {};
//   return arr.filter((el) => {
//     photos[el] = photos[el] + 1 || 1;
//     return photos[el] <= n ? el : null;
//   });
// }

// Traditional approach | splice existing array
// function deleteNth(arr, n) {
//   const photos = {};
//   for (let i = 0; i < arr.length; i++) {
//     const currPhoto = arr[i];
//     photos[currPhoto] = photos[currPhoto] + 1 || 1;
//     if (photos[currPhoto] > n) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// }

//Traditional | push into new array
// function deleteNth(arr, n) {
//   const photos = {};
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const currPhoto = arr[i];
//     photos[currPhoto] = photos[currPhoto] + 1 || 1;
//     if (photos[currPhoto] <= n) result.push(currPhoto);
//   }
//   return result;
// }

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(
  deleteNth(
    [
      36,
      15,
      15,
      36,
      15,
      3,
      6,
      36,
      15,
      32,
      6,
      6,
      15,
      3,
      15,
      6,
      36,
      15,
      3,
      3,
      3,
      15,
      6,
      36,
      3,
      6,
      36,
      15,
      36,
      36,
      15,
      12,
      6,
      36,
    ],
    4
  ),
  [36, 15, 15, 36, 15, 3, 6, 36, 15, 32, 6, 6, 3, 6, 36, 3, 3, 12]
);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [
  1,
  1,
  3,
  3,
  7,
  2,
  2,
  2,
]);
