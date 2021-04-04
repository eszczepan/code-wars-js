function tickets(line) {
  const bills = [0, 0];
  for (let i = 0; i < line.length; i++) {
    const currBill = line[i];
    switch (currBill) {
      case 25:
        bills[0]++;
        break;
      case 50:
        bills[0]--;
        bills[1]++;
        break;
      case 100:
        bills[1] ? bills[1]-- : (bills[0] -= 2);
        bills[0]--;
        break;
    }
    if (bills[0] < 0) return "NO";
  }
  return "YES";
}

// function tickets(line) {
//   let twentyFive = 0;
//   let fifty = 0;
//   for (let i = 0; i < line.length; i++) {
//     const currBill = line[i];
//     console.log(currBill);
//     switch (currBill) {
//       case 25:
//         twentyFive++;
//         break;
//       case 50:
//         {
//           if (twentyFive > 0) {
//             twentyFive--;
//             fifty++;
//           } else return "NO";
//         }
//         break;
//       case 100:
//         {
//           if (twentyFive > 0 && fifty > 0) {
//             twentyFive--;
//             fifty--;
//           } else if (twentyFive > 2 && fifty === 0) {
//             twentyFive -= 3;
//           } else return "NO";
//         }
//         break;
//     }
//   }
//   return "YES";
// }

// function tickets(line) {
//   let twentyFive = 0;
//   let fifty = 0;
//   for (let i = 0; i < line.length; i++) {
//     const currBill = line[i];
//     if (currBill === 25) {
//       twentyFive++;
//     } else if (currBill === 50) {
//       if (twentyFive > 0) {
//         twentyFive--;
//         fifty++;
//       } else return "NO";
//     } else if (currBill === 100) {
//       if (twentyFive > 0 && fifty > 0) {
//         twentyFive--;
//         fifty--;
//       } else if (twentyFive > 2 && fifty === 0) {
//         twentyFive -= 3;
//       } else return "NO";
//     }
//   }
//   return "YES";
// }

console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");
console.log(tickets([25, 25, 50, 50, 100]), "NO");
