const fatFingers = (str) => {
  let fatFingered = false;
  return str === null
    ? null
    : str
        .split("")
        .map((l) => {
          if (l.toLowerCase() === "a") {
            fatFingered = !fatFingered;
            return (l = "");
          }
          return fatFingered
            ? l === l.toUpperCase()
              ? l.toLowerCase()
              : l.toUpperCase()
            : l;
        })
        .join("");
};

console.log(fatFingers("The quick brown fox jumps over the lazy dog.")); // The quick brown fox jumps over the lZY DOG.
console.log(fatFingers("aAaaaaAaaaAAaAa") == ""); // ""
console.log(fatFingers("") == ""); // ""
console.log(fatFingers("a99&a6/<a}")); // 99&6/<}
console.log(fatFingers(null)); // null
console.log(fatFingers("Freddy is pretty good with his fingers right now!")); // Freddy is pretty good with his fingers right now!
console.log(fatFingers("abABaBabAb")); // BBbbB
console.log(fatFingers("Important messaGe!")); // ImportNT MESSGe!
