// const longest = (s1, s2) =>
//   Object.keys(
//     (s1 + s2).split("").reduce((all, l) => ((all[l] = true), all), {})
//   )
//     .sort()
//     .join("");

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(
  longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
  "abcdefghilnoprstu"
);
console.log(
  longest("inmanylanguages", "theresapairoffunctions"),
  "acefghilmnoprstuy"
);
