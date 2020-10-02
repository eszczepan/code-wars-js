function solution(N) {
  let digitCounter = 0;
  for (i = 0; i <= N; i++) {
    const digitStr = i.toString();
    for (const char of digitStr) {
      if (char.includes(1)) {
        digitCounter++;
      }
    }
  }
  return digitCounter;
}

console.log(solution(13));
