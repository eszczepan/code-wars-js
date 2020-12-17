const printerError = (s) => `${s.match(/[n-z]/g).length}/${s.length}`;

// const printerError = (s) => {
//   const errors = s.split("").filter((l) => l.match(/[n-z]/g));
//   return `${errors.length}/${s.length}`;
// };
// const printerError = (s) => {
//   const errors = s.split("").reduce((acc, l) => {
//     if (l.match(/[n-z]/g)) acc++;
//     return acc;
//   }, 0);
//   return `${errors}/${s.length}`;
// };

// const printerError = (s) => {
//   let errors = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i].match(/[n-z]/g)) errors++;
//   }
//   return `${errors}/${s.length}`;
// };

// const printerError = (s) => {
//   let errors = 0;
//   s.split("").forEach((l) => (l.match(/[n-z]/g) ? errors++ : null));
//   return `${errors}/${s.length}`;
// };

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
