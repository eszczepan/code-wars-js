// FIRST APPROACH
// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// SECOND APPROACH
for (i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output = "Fizz";
  if (i % 5 === 0) output = "Buzz";
  if (i % 3 === 0 && i % 5 === 0) output = "FizzBuzz";
  if (output === "") output = i;
  console.log(output);
}
