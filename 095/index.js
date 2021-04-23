function solution(str) {
  const result = [];
  let i = 0;
  if (str.length % 2 !== 0) str = str + "_";
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return result;
}
// function solution(str) {
//   if (str === "") return [];
//   const result = [];
//   let pair = "";
//   for (let i = 0; i < str.length; i++) {
//     currChar = str[i];
//     pair += currChar;
//     if (str.length % 2 !== 0 && i === str.length - 1) {
//       pair += "_";
//       result.push(pair);
//     } else if (i % 2 !== 0) {
//       result.push(pair);
//       pair = "";
//     }
//   }
//   return result;
// }

// reduce
// function solution(str) {
//   if (str === "") return [];
//   let pair = "";
//   return str.split("").reduce((acc, char, i) => {
//     pair += char;
//     if (str.length % 2 !== 0 && i === str.length - 1) {
//       pair += "_";
//       acc.push(pair);
//     } else if (i % 2 !== 0) {
//       acc.push(pair);
//       pair = "";
//     }
//     return acc;
//   }, []);
// }

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
