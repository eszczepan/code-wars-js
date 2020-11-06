const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;
  else {
    let horizontal = 0;
    let vertical = 0;
    walk.forEach((move) => {
      if (move === "n") horizontal++;
      if (move === "s") horizontal--;
      if (move === "e") vertical++;
      if (move === "w") vertical--;
    });
    if (horizontal === 0 && vertical === 0) return true;
    else return false;
  }
};

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  !isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
