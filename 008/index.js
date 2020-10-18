String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const str = "How can mirrors be real if our eyes aren't real";
const str2 = "School is the tool to brainwash the youth.";
console.log(str.toJadenCase()); // How Can Mirrors Be Real If Our Eyes Aren't Real
console.log(str2.toJadenCase()); // "School Is The Tool To Brainwash The Youth."
