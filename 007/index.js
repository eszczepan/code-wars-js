function capitalize(s) {
  const even = s
    .split("")
    .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter))
    .join("");

  const odd = s
    .split("")
    .map((letter, index) => (index % 2 !== 0 ? letter.toUpperCase() : letter))
    .join("");
  return [even, odd];
}

console.log(capitalize("codewars"));
