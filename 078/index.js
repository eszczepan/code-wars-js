class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

const sum = (s) => s.fives * 5 + s.tens * 10 + s.twenties * 20;

const mostMoney = (s) => {
  s.sort((a, b) => sum(b) - sum(a));
  if (s.length > 1 && sum(s[0]) === sum(s[1])) return "all";
  return s[0].name;
};

// const mostMoney = (students) => {
//   if (students.length === 1) return students[0].name;
//   const result = [];
//   students.forEach((s) => {
//     const money = s.fives * 5 + s.tens * 10 + s.twenties * 20;
//     s.money = money;
//     result.push(s);
//   });
//   result.sort((a, b) => b.money - a.money);
//   return result[0].money === result[1].money ? "all" : result[0].name;
// };

// const mostMoney = (students) => {
//   const result = [];
//   for (let i = 0; i < students.length; i++) {
//     curr = students[i];
//     const money = curr.fives * 5 + curr.tens * 10 + curr.twenties * 20;
//     curr.money = money;
//     if (result.length === 0 || money > result[0].money) {
//       result = [];
//       result.push(curr);
//     } else if (money == result[0].money) result.push(curr);
//   }
//   return result.length > 1 ? "all" : result[0].name;
// };

console.log(mostMoney([andy, stephen, eric, david, phil]), "Eric");
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric");
console.log(mostMoney([andy]), "Andy");
console.log(mostMoney([stephen]), "Stephen");
