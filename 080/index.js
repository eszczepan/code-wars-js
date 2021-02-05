const inArray = (a1, a2) =>
  a1.filter((e) => a2.some((w) => w.includes(e))).sort();

// function inArray(a1, a2) {
//   const result = [];
//   a1.forEach((e) => {
//     for (const e2 of a2) {
//       if (e2.includes(e)) return result.push(e);
//     }
//   });
//   return result.sort();
// }

a1 = ["xyz", "live", "strong"];
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2), ["live", "strong"]);
