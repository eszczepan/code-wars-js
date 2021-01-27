function validParentheses(parens) {
  let check = 0;
  for (let i = 0; i < parens.length; i++) {
    if (check < 0) return false;
    else if (parens[i] === "(") check++;
    else check--;
  }
  return check === 0;
}

// function validParentheses(parens) {
//   if (parens.charAt(0) === ")" || parens.charAt(parens.length - 1) === "(")
//     return false;
//   let check = 0;
//   for (let i = 0; i < parens.length; i++) {
//     const curr = parens.charAt(i);
//     if (check < 0) return false;
//     else if (curr === "(") check++;
//     else check--;
//   }
//   return check === 0;
// }

console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);
console.log(validParentheses(")()("), false);
console.log(validParentheses("())("), false);
console.log(validParentheses("())(()"), false);
