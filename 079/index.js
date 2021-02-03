function whoIsNext(names, r) {
  while (names.length < r) {
    r -= names.length - 1;
    r *= 0.5;
    r = Math.floor(r);
  }
  return names[r - 1];
}

const names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
console.log(whoIsNext(names, 1), "Sheldon");
console.log(whoIsNext(names, 52), "Penny");
