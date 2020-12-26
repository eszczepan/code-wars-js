const snail = (array) => {
  let result = [];
  while (array.length) {
    result = result ? result.concat(array.shift()) : array.shift();
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    result = result.concat((array.pop() || []).reverse());
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
};

console.log(
  snail([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);
