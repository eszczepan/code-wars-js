const humanReadable = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds - (h * 3600 + m * 60);
  return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
    s < 10 ? "0" + s : s
  }`;
};

console.log(humanReadable(0)); // ==> should return '00:00:00'
console.log(humanReadable(5)); // ==> should return '00:00:05'
console.log(humanReadable(86399)); // ==> should return '23:59:59'
console.log(humanReadable(359999)); // ==> should return '99:59:59"
console.log(humanReadable(60)); // ==> should return '00:01:00"
