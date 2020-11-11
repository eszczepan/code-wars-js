const palindromeChainLength = (n) => {
  let count = 0;
  let currentNum = n;
  const reverse = (num) => +num.toString().split("").reverse().join("");
  const isPalindrome = (num) => {
    return num == reverse(num);
  };
  while (!isPalindrome(currentNum)) {
    currentNum = reverse(currentNum) + currentNum;
    count++;
  }
  return count;
};

console.log(palindromeChainLength(87)); // 4
console.log(palindromeChainLength(1)); // 0
console.log(palindromeChainLength(89)); // 24
console.log(palindromeChainLength(10)); // 1
