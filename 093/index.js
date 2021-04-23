function titleCase(title, minorWords) {
  if (title === "") return "";
  const storeExep = {};
  if (minorWords) {
    minorWords
      .split(" ")
      .forEach((word) => (storeExep[word.toLowerCase()] = true));
  }
  return title
    .toLowerCase()
    .split(" ")
    .reduce((acc, word, index) => {
      if (storeExep[word] && index !== 0) acc.push(word);
      else acc.push(word.charAt(0).toUpperCase() + word.slice(1));
      return acc;
    }, [])
    .join(" ");
}

console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of"), "A Clash of Kings");
console.log(
  titleCase("THE WIND IN THE WILLOWS", "The In"),
  "The Wind in the Willows"
);
console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
