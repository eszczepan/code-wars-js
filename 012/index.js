const accum = (s) => {
  return s
    .split("")
    .map((l, i) => (l = l.toUpperCase() + l.repeat(i).toLowerCase()))
    .join("-");
};

console.log(accum("ZpglnRxqenU")); // Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
console.log(accum("NyffsGeyylB")); // N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb
console.log(accum("EvidjUnokmM")); // E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm
console.log(accum("OlyqvYwkuzF")); // O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff
