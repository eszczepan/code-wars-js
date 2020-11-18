// Rekursja

const nbYear = (p0, percent, aug, p, years) => {
  years = years || 0;
  if (p > p0) {
    p0 = p0 + (p0 * (percent / 100) + aug);
    years++;
    return nbYear(p0, percent, aug, p, years);
  }
  return years;
};

// Varowy scope

// const nbYear = (p0, percent, aug, p) => {
//   for (var i = 0; p0 < p; i++) {
//     p0 = p0 + (p0 * (percent / 100) + aug);
//   }
//   return i;
// };

// const nbYear = (p0, percent, aug, p) => {
//   let years = 0;
//   while (p > p0) {
//     p0 = p0 + (p0 * (percent / 100) + aug);
//     years++;
//   }
//   return years;
// };

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
