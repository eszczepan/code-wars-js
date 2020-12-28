const generateHashtag = (str) => {
  const trimedStr = str.replace(/\s+/g, " ").trim();
  if (trimedStr === "" || trimedStr.length >= 140) return false;
  else {
    return (
      "#" +
      trimedStr
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    );
  }
};

const word = "         Hello!!               THERE               ";
console.log(word.replace(/\s+/g, "").trim());

console.log(generateHashtag(""), false);
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag");
