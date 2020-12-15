// reduce
function list(names) {
  return names.reduce((result, { name }, i) => {
    if (i == names.length - 1) return (result += name);
    else if (i === names.length - 2) return (result += name + " & ");
    else return (result += name + ", ");
  }, "");
}

// function list(names) {
//   let result = "";
//   for (let i = 0; i < names.length; i++) {
//     const { name } = names[i];
//     if (i == names.length - 1) result += name;
//     else if (i === names.length - 2) result += name + " & ";
//     else result += name + ", ";
//   }
//   return result.trim();
// }

// function list(names) {
//   let result = "";
//   for (let i = 0; i < names.length; i++) {
//     const { name } = names[i];
//     if (names.length === 1) return name;
//     else if (i === names.length - 1) {
//       result += name;
//     } else if (i === names.length - 2) {
//       result += name + " & ";
//     } else result += name + ", ";
//   }
//   return result.trim();
// }

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ])
); // 'Bart, Lisa, Maggie, Homer & Marge'
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])); // 'Bart, Lisa & Maggie'
console.log(list([{ name: "Bart" }, { name: "Lisa" }])); // 'Bart & Lisa'
console.log(list([{ name: "Bart" }])); // 'Bart'
console.log(list([])); // ''
