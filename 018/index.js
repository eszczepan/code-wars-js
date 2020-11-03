const getCount = (str) => {
  let vowelsCount = 0;

  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  str.split("").forEach((l) => (vowels[l] ? vowelsCount++ : null));

  return vowelsCount;
};

//Filter way
// const getCount = (str) => {
//   const vowels = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//   };

//   return str.split("").filter((l) => vowels[l]).length;
// };

//Reduce way
// const getCount = (str) => {
//   const vowels = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//   };

//   return str.split("").reduce((vowelsCount, letter) => {
//     if (vowels[letter]) vowelsCount++;
//     return vowelsCount;
//   }, 0);
// };

// Definitely smarter way
// const getCount = (str) => (str.match(/[aeiou]/gi) || []).length;

console.log(getCount("abracadabra")); // 5
console.log(getCount("pear tree")); // 4
console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13
console.log(getCount("my pyx")); // 0
