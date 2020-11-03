// Prolly most efficient way because of only one iteration
const DNAStrand = (dna) => {
  let w = "";

  const symbolsSwap = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  for (let i = 0; i < dna.length; i++) {
    w += symbolsSwap[dna[i]];
  }
  return w;
};

// Reduce way

// const DNAStrand = (dna) => {
//   const symbolsSwap = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };

//   return dna.split("").reduce((acc, l) => {
//     acc += symbolsSwap[l];
//     return acc;
//   }, "");
// };

// ForEach object way

// const DNAStrand = (dna) => {
//   let w = "";
//   const symbolsSwap = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };

//   dna.split("").forEach((l) => (w += symbolsSwap[l]));

//   return w;
// };

// ForEach way - 2 iterates

// const DNAStrand = (dna) => {
//   let w = "";
//   dna.split("").forEach((l) => {
//     if (l === "A") return (w += "T");
//     if (l === "T") return (w += "A");
//     if (l === "C") return (w += "G");
//     if (l === "G") return (w += "C");
//   });
//   return w;
// };

// Map way - 3 iterates

// const DNAStrand = (dna) => {
//   return dna
//     .split("")
//     .map((l) => {
//       if (l === "A") return (l = "T");
//       if (l === "T") return (l = "A");
//       if (l === "C") return (l = "G");
//       if (l === "G") return (l = "C");
//     })
//     .join("");
// };

console.log(DNAStrand("AAAA")); // "TTTT"
console.log(DNAStrand("ATTGC")); // "TAACG"
console.log(DNAStrand("GTAT")); // "CATA"
