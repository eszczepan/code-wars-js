// Reduce

// const countSmileys = (arr) => {
//   const eyes = {
//     ":": true,
//     ";": true,
//   };

//   const noses = {
//     "-": true,
//     "~": true,
//   };

//   const smiles = {
//     D: true,
//     ")": true,
//   };

//   return arr.reduce((acc, face) => {
//     if (face.length === 2) {
//       if (eyes[face[0]] && smiles[face[1]]) acc++;
//     } else if (face.length === 3) {
//       if (eyes[face[0]] && smiles[face[2]] && noses[face[1]]) acc++;
//     }
//     return acc;
//   }, 0);
// };

// First thought

const countSmileys = (arr) =>
  arr.filter((i) => /^[;:][-~]?[)D]$/.test(i)).length;

console.log(countSmileys([":)", ";(", ";}", ":-D"])); // should return 2;
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // should return 3;
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // should return 1;
