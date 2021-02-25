function toUnderscore(string) {
  if (typeof string !== "string") return string.toString();
  let underScored = "";
  for (let i = 0; i < string.length; i++) {
    const c = string[i];
    if (c.match(/[A-Z]/g) && i !== 0) underScored += `_${c.toLowerCase()}`;
    else underScored += c.toLowerCase();
  }
  return underScored;
}

// function toUnderscore(string) {
//   if(typeof string !== 'string') return string.toString();
//   return string
//     .split("")
//     .map((c, i) => {
//       if (c.match(/[A-Z]/g) && i !== 0) return `_${c.toLowerCase()}`;
//       else return c.toLowerCase();
//     })
//     .join("");
// }

console.log(toUnderscore("MoviesAndBooks")); // movies_and_books
