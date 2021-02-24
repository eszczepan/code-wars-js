function bouncingBall(h, bounce, window) {
  if (h < 0 || bounce < 0 || bounce >= 1 || window > h) return -1;
  let sum = 0;
  while (h > window) {
    h = h * bounce;
    sum += 1;
  }
  return sum * 2 + 1;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
