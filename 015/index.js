const XO = (str) => {
  let x = 0;
  let o = 0;
  str.split("").forEach((i) => {
    if (i.toLowerCase() == "x") return x++;
    if (i.toLowerCase() === "o") return o++;
  });
  return x === o;
};

console.log(XO("xo")); // true
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("Oo")); // false
console.log(XO("ooom")); // false
