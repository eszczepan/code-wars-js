// Clever regex

// const maskify = (cc) => cc.replace(/.(?=.{4})/g, "#");

// Replace

const maskify = (cc) => cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);

// First thought

// const maskify = (cc) =>
//   cc
//     .split("")
//     .map((item, index) => (index >= cc.length - 4 ? item : (item = "#")))
//     .join("");

console.log(maskify("4556364607935616")); // ############ 5616
console.log(maskify("1")); // 1
console.log(maskify("11111")); // #1111
