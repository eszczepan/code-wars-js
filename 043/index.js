const rgbConvert = (r, g, b) =>
  [r, g, b]
    .map((val) =>
      val < 0 ? "00" : val > 255 ? "FF" : val.toString(16).toUpperCase()
    )
    .join("");

// const withinRange = (value) => (value < 0 ? 0 : value > 255 ? 255 : value);
// const pad = (value) => (value.length === 1 ? "0" + value : value);
// const toHex = (value) => pad(value.toString(16).toUpperCase());
// const convert = (value) => toHex(withinRange(value));

// const rgbConvert = (r, g, b) => `${convert(r)}${convert(g)}${convert(b)}`;

console.log(rgbConvert(0, 0, 0), "000000");
console.log(rgbConvert(0, 0, -20), "000000");
console.log(rgbConvert(300, 255, 255), "FFFFFF");
console.log(rgbConvert(173, 255, 47), "ADFF2F");
