const capitals = (word) => {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    const currLetter = word[i];
    if (currLetter == currLetter.toUpperCase()) result.push(i);
  }
  return result;
};

// const capitals = (word) =>
//   word.split("").reduce((acc, letter, index) => {
//     if (letter === letter.toUpperCase()) acc.push(index);
//     return acc;
//   }, []);

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
