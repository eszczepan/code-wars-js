f = (n) => Math.max(...("" + n).match(/(0+)/g).map((e) => e.length));

// f = (n) =>
//   Math.max(
//     ...n
//       .toString()
//       .match(/(0+)/g)
//       .map((e) => e.length)
//   );

console.log(f(1002000), 3);
console.log(f(10002030000), 4);
console.log(f(10), 1);
