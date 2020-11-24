// Sort

// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }

// Reduce

function comp(array1, array2) {
  if (array1 === null || array2 === null || array1.length !== array2.length)
    return false;

  const squaredValues = array2.reduce((acc, value) => {
    acc[value] = acc[value] || 0;
    acc[value]++;
    return acc;
  }, {});

  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    const valueSqrd = value ** 2;
    if (!squaredValues[valueSqrd]) return false;
    else squaredValues[valueSqrd]--;
  }

  return true;
}

// First thought

// function comp(array1, array2) {
//   if (array1 === null || array2 === null || array1.length !== array2.length)
//     return false;
//   const obj = {};
//   for (let i = 0; i < array2.length; i++) {
//     const currentNum = array2[i];
//     obj[currentNum] = obj[currentNum] || 0;
//     obj[currentNum]++;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     const currentNum1 = array1[i] ** 2;
//     if (!obj[currentNum1]) return false;
//     else obj[currentNum1]--;
//   }

//   return true;
// }

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2), true);
