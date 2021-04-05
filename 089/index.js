const validatePIN = (pin) => /^(\d{4}$|\d{6}$)/.test(pin);

// const validatePIN = (pin) => /^([0-9]{4}|[0-9]{6})$/.test(pin);

console.log(validatePIN("123"), false);
console.log(validatePIN("12345"), false);
console.log(validatePIN("1234567"), false);
console.log(validatePIN("a234"), false);
console.log(validatePIN(".234"), false);
console.log(validatePIN("0000"), true);
console.log(validatePIN("1111"), true);
console.log(validatePIN("123456"), true);
