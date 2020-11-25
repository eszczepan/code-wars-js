const rot13 = (str) =>
  str.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );

// function rot13(message) {
//   return message
//     .split("")
//     .map((char) => {
//       const charCode = char.charCodeAt(0);
//       let newCharCode = charCode + 13;
//       if (charCode >= 65 && charCode <= 90)
//         newCharCode > 90 ? (newCharCode -= 26) : newCharCode;
//       else if (charCode >= 97 && charCode <= 122)
//         newCharCode > 122 ? (newCharCode -= 26) : newCharCode;
//       else return String.fromCharCode(charCode);
//       return String.fromCharCode(newCharCode);
//     })
//     .join("");
// }

console.log(rot13("test")); // grfg
console.log(rot13("Test")); // Grfg
