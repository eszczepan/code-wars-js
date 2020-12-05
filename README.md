# Algorithms challenges

## [055 Counting Duplicates](./055)

### Description:

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

### Example:

```
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
```

### Link:

[Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)

## [053 Pete, the baker](./053)

### Description:

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function `cakes()`, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

### Example:

```
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
```

### Link:

[Pete, the baker](https://www.codewars.com/kata/525c65e51bf619685c000059)

## [052 Stop gninnipS My sdroW!](./052)

### Description:

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

### Example:

```
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
```

### Link:

[Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

## [051 Find the divisors!](./051)

### Description:

Create a function named `divisors` that takes an integer `n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

### Example:

```
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
```

### Link:

[Find the divisors!](https://www.codewars.com/kata/544aed4c4a30184e960010f4)

## [050 Regex Password Validation](./050)

### Description:

You need to write regex that will validate a password to make sure it meets the following criteria:

- At least six characters long
- Contains a lowercase letter
- Contains an uppercase letter
- Contains a number

Valid passwords will only be alphanumeric characters.

### Example:

```
validate('djI38D55') => should return true
!validate('a2.d412') => should return false
```

### Link:

[Regex Password Validation](https://www.codewars.com/kata/52e1476c8147a7547a000811)

## [049 Does my number look big in this?](./049)

### Description:

A [Narcissistic Number](https://en.wikipedia.org/wiki/Narcissistic_number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

### Example:

```
take 153 (3 digits), which is narcisstic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```

### Note:

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

### Link:

[Does my number look big in this?](https://www.codewars.com/kata/5287e858c6b5a9678200083c)

## [048 Correct the mistakes](./048)

### Description:

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

- `S` is misinterpreted as `5`
- `O` is misinterpreted as `0`
- `I` is misinterpreted as `1`

### Example:

```
correct("L0ND0N") => "LONDON"
correct("DUBL1N") => "DUBLIN"
correct("51NGAP0RE") => "SINGAPORE"
```

### Link:

[Correct the mistakes](https://www.codewars.com/kata/577bd026df78c19bca0002c0)

## [047 Rot13](./047)

### Description:

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

### Example:

```
rot13("test") should return => "grfg"
rot13("Test") should return => "Grfg"
```

### Link:

[Rot13](https://www.codewars.com/kata/530e15517bc88ac656000716)

## [046 Are they the "same"?](./046)

### Description:

Given two arrays `a` and `b` write a function `comp(a, b)` (`compSame(a, b)` in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in `b` are the elements in `a` squared, regardless of the order.

### Example:

```
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

If we change the first number to something else, comp may not return true anymore:
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

```

### Note:

- `a` or `b` might be `[]` (all languages except R, Shell).
- `a` or `b` might be `nil` or `null` or `None` or `nothing` (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).
- If `a` or `b` are `nil` (or `null` or `None`), the problem doesn't make sense so return false.
- The two arrays have the same size `(> 0)` given as parameter in function `comp`.

### Link:

[Are they the "same"?](https://www.codewars.com/kata/550498447451fbbd7600041c)

## [045 Your order, please](./045)

### Description:

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

### Example:

```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

### Link:

[Your order, please](https://www.codewars.com/kata/55c45be3b2079eccff00010f)

## [044 Growth of a Population](./044)

### Description:

In a small town the population is `p0 = 1000` at the beginning of a year. The population regularly increases by `2 percent` per year and moreover `50` new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

### Example:

```
nbYear(1500, 5, 100, 5000) => 15
nbYear(1500000, 2.5, 10000, 2000000) => 10
nbYear(1500000, 0.25, 1000, 2000000) => 94
```

### Link:

[Growth of a Population](https://www.codewars.com/kata/513e08acc600c94f01000001)

## [043 RGB To Hex Conversion](./043)

### Description:

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

### Example:

```
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
```

### Link:

[RGB To Hex Conversion](https://www.codewars.com/kata/513e08acc600c94f01000001)

## [042 Where my anagrams at?](./042)

### Description:

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.

### Example:

```
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```

### Link:

[Where my anagrams at?](https://www.codewars.com/kata/523a86aa4230ebb5420001e1)

## [041 Convert string to camel case](./041)

### Description:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

### Example:

```
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
```

### Link:

[Convert string to camel case](https://www.codewars.com/kata/517abf86da9663f1d2000003)

## [040 Multiples of 3 or 5](./040)

### Description:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

### Example:

```
solution(10) => should return 23
```

### Link:

[Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006)

## [039 Isograms](./039)

### Description:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

### Example:

```
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
```

### Link:

[Isograms](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

## [038 Calculating with Functions](./038)

### Description:

This time we want to write calculations using functions and get the results.

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (`divided_by` in Ruby and Python)
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be integer division. For example, this should return `2`, not `2.666666...`: `eight(dividedBy(three()))`

### Example:

```
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```

### Link:

[Calculating with Functions](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39)

## [037 Moving Zeros To The End](./037)

### Description:

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

### Example:

```
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```

### Link:

[Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

## [036 Sum of Digits / Digital Root](./036)

### Description:

[Digital root](https://en.wikipedia.org/wiki/Digital_root) is the recursive sum of all the digits in a number.

Given `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

### Example:

```
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

### Link:

[Sum of Digits / Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00)

## [035 Find the odd int](./035)

### Description:

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

### Example:

```
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) => should return 5
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) => should return -1
```

### Link:

[Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836)

## [034 Triangular Numbers](./034)

### Description:

Triangular number is the amount of points that can fill equilateral triangle.

Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

### Example:

```
isTriangular(15)); => should return true
isTriangular(28)); => should return true
isTriangular(2)); => should return false
isTriangular(7)); => should return false
```

### Link:

[Triangular Numbers](https://www.codewars.com/kata/56d0a591c6c8b466ca00118b)

## [033 Sum of Numbers](./033)

### Description:

Given two integers `a` and `b`, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return `a` or `b`.

Note: `a` and `b` are not ordered!

### Example:

```
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```

### Link:

[Sum of Numbers](https://www.codewars.com/kata/55f2b110f61eb01779000053)

## [032 Roman Numerals Encoder](./032)

### Description:

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

### Example:

```
solution(1000); // should return 'M'
```

### Help:

```
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
```

### Link:

[Roman Numerals Encoder](https://www.codewars.com/kata/51b62bf6a9c58071c600001b)

## [031 Palindrome chain length](./031)

### Description:

Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

Write a method `palindrome_chain_length` which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

Input will always be a positive integer.

### Example:

```
Start with 87:

87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4
```

### Link:

[Palindrome chain length](https://www.codewars.com/kata/525f039017c7cd0e1a000a26)

## [030 Equal Sides Of An Array](./030)

### Description:

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

Let's say you are given the array `{1,2,3,4,3,2,1}`: Your function will return the index `3`, because at the 3rd position of the array, the sum of left side of the index (`{1,2,3}`) and the sum of the right side of the index (`{3,2,1}`) both equal `6`.

Let's look at another one.
You are given the array `{1,100,50,-51,1,1}`: Your function will return the index `1`, because at the 1st position of the array, the sum of left side of the index (`{1}`) and the sum of the right side of the index (`{50,-51,1,1}`) both equal 1.

### Example:

```
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.
```

Input:
An integer array of length `0 < arr < 1000`. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

### Note:

If you are given an array with multiple answers, return the lowest correct index.

### Link:

[Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047)

## [029 Create Phone Number](./029)

### Description:

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

### Example:

```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

### Link:

[Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

## [028 Credit Card Mask](./028)

### Description:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function `maskify`, which changes all but the last four characters into `'#'`.

### Example:

```
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
```

### Link:

[Credit Card Mask](https://www.codewars.com/kata/5412509bd436bd33920011bc)

## [027 Human Readable Time](./027)

### Description:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (`HH:MM:SS`)

- `HH` = hours, padded to 2 digits, range: 00 - 99
- `MM` = minutes, padded to 2 digits, range: 00 - 59
- `SS` = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (`99:59:59`)

### Example:

```
humanReadable(0) ==> should return '00:00:00'
humanReadable(5) ==> should return '00:00:05'
humanReadable(86399) ==> should return '23:59:59'
```

### Link:

[Human Readable Time](https://www.codewars.com/kata/52685f7382004e774f0001f7)

## [026 Scramblies](./026)

### Description:

Complete the function `scramble(str1, str2)` that returns `true` if a portion of `str1` characters can be rearranged to match `str2`, otherwise returns `false`.

- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered

`Input strings s1 and s2 are null terminated.`

### Example:

```
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
```

### Link:

[Scramblies](https://www.codewars.com/kata/55c04b4cc56a697bb0000048)

## [025 Count the smiley faces! ](./025)

### Description:

Given an array (arr) as an argument complete the function `countSmileys` that should return the total number of smiling faces.

Rules for a smiling face:

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
- A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
- Every smiling face must have a smiling mouth that should be marked with either `)` or `D`
- No additional characters are allowed except for those mentioned.

Valid smiley face examples: `:) :D ;-D :~)`
Invalid smiley faces: `;( :> :} :]`

### Example:

```
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```

### Note:

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

### Link:

[Count the smiley faces!](https://www.codewars.com/kata/583203e6eb35d7980400002a)

## [024 List Filtering](./024)

### Description:

Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

### Example:

```
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```

### Link:

[List Filtering](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd)

## [023 Unique Sum](./023)

### Description:

Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

### Example:

```
[ 1, 2, 3] ==> 6
[ 1, 3, 8, 1, 8] ==> 12
[ -1, -1, 5, 2, -7] ==> -1
[] ==> null
```

### Link:

[Unique Sum](https://www.codewars.com/kata/56b1eb19247c01493a000065)

## [022 Simple Pig Latin](./022)

### Description:

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

### Example:

```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

```

### Link:

[Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

## [021 IQ Test](./021)

### Description:

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

### Example:

```
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

```

### Link:

[IQ Test](https://www.codewars.com/kata/552c028c030765286c00007d)

## [020 Take a Ten Minute Walk](./020)

### Description:

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

### Example:

```
isValidWalk(['n','s','n','s','n','s','n','s','n','s']) -> should return true
!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) -> should return false

```

### Note:

You will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

### Link:

[Take a Ten Minute Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

## [019 Complementary DNA](./019)

### Description:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

### Example:

```
DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA"

```

### Link:

[Complementary DNA](https://www.codewars.com/kata/554e4a2f232cdd87d9000038)

## [018 Vowel Count](./018)

### Description:

Return the number (count) of vowels in the given string.

We will consider `a, e, i, o, u` as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

### Example:

```
getCount("abracadabra"); -> should return 5
getCount("pear tree"); should return 4
getCount("o a kak ushakov lil vo kashu kakao"); should return 13

```

### Link:

[Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

## [017 Sum of pairs](./017)

### Description:

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

Negative numbers and duplicate numbers can and will appear.

### Example:

```
sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

```

### Note:

There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

### Link:

[Sum of pairs](https://www.codewars.com/kata/54d81488b981293527000c8f)

## [016 Fat Fingers](./016)

### Description:

Freddy has a really fat left pinky finger, and every time Freddy tries to type an A, he accidentally hits the CapsLock key!

Given a string that Freddy wants to type, emulate the keyboard misses where each A supposedly pressed is replaced with CapsLock, and return the string that Freddy actually types. It doesn't matter if the A in the string is capitalized or not. When CapsLock is enabled, capitalization is reversed, but punctuation is not affected.

### Example:

```
"The quick brown fox jumps over the lazy dog." -> "The quick brown fox jumps over the lZY DOG."
"Important messaGe!" -> "ImportNT MESSGe!"
"abABaBabAb" -> "BBbbB"

```

If (Caps Lock is Enabled) and then you (HOLD Shift + alpha character) it will always be the reverse

```
(Caps Lock Enabled) + (HOLD Shift + Press 'b') = b
(Caps Lock Disabled) + (HOLD Shift + Press 'b') = B

```

### Link:

[Fat Fingers](https://www.codewars.com/kata/5aa99584fd5777ee9a0001f1)

## [015 Exes and Ohs](./015)

### Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

### Example:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

```

### Link:

[Exes and Ohs](https://www.codewars.com/kata/55908aad6620c066bc00002a)

## [014 Basic Sequence Practice](./014)

### Description:

A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

Complete the function that takes an integer n and returns a list/array of length abs(n) + 1. When n < 0 return the sequence with negative terms.

### Example:

```
sumOfN(3); // [0, 1, 3, 6]
sumOfN(-4); // [0, -1, -3, -6, -10]
sumOfN(1); // [0, 1]
sumOfN(0); // [0]
sumOfN(10); // [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]

```

### Link:

[Basic Sequence Practice](https://www.codewars.com/kata/5436f26c4e3d6c40e5000282)

## [013 Decode the Morse code](./013)

### Description:

You have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

### Example:

```
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```

### Link:

[Decode the Morse code](https://www.codewars.com/kata/54b724efac3d5402db00065e)

## [012 Mumbling](./012)

### Description:

This time no story, no theory. The examples below show you how to write function accum:

### Example:

```
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
```

### Link:

[Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039)

## [011 Century From Year](./011)

### Description:

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Given a year, return the century it is in.

### Example:

```
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
```

### Link:

[Century From Year](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)

## [010 Binary Addition](./010)

### Description:

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

### Example:

```
addBinary(1, 2)) should return 11
```

### Link:

[Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139)

## [009 Bit Counting](./009)

### Description:

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

### Example:

```
The binary representation of 1234 is 10011010010, so the function should return 5 in this case
```

### Link:

[Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4)

## [008 Jaden Casing Strings](./008)

### Description:

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"  
Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

### Example:

```
const str = "School is the tool to brainwash the youth."
str.toJadenCase() // "School Is The Tool To Brainwash The Youth."
```

### Link:

[Jaden Casing Strings](https://www.codewars.com/kata/5390bac347d09b7da40006f6)

## [007 Alternate capitalization](./007)

### Description:

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See below for more examples.

The input will be a lowercase string with no spaces.

### Example:

```
capitalize("codewars") // ['CoDeWaRs', 'cOdEwArS']
capitalize("abracadabra") // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
capitalize("codewarriors") // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
```

### Link:

[Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

## [006 Sum of two lowest positive integers](./006)

### Description:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

### Example:

```
sumTwoSmallestNumbers([19, 5, 42, 2, 77]) // output should be 7
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) // should return 3453455
```

### Link:

[Sum of two lowest positive integers](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

## [005 Dubstep](./005)

### Description:

Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

### Example:

```
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
```

### Link:

[Dubstep](https://www.codewars.com/kata/551dc350bf4e526099000ae5)

## [004 Categorize New Member](./004)

### Description:

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

### Example:

```
Test.assertSimilar(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
Test.assertSimilar(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]),['Open', 'Open', 'Open', 'Open'])
Test.assertSimilar(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
```

### Link:

[Categorize New Member](https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa)

## [003 Who likes it?](./003)

### Description:

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function `likes :: [String] -> String`, which must take in input array, containing the names of people who like an item. For 4 or more names, the number in and 2 others simply increases.

It must return the display text as shown in the examples:

### Example:

```
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
```

### Link:

[Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)

## [Task 002](./002)

### Description:

Write a function that given an intiger N, returns the number of times digit 1 occurs in decimal representations of all positive integers not exceeding N. N is an integer within the range [0...100,000]

### Example:

Given N = 13 the function should return 6, because:

- all the positive integers do not exceed 13 are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 and 13;
- digit 1 occurs six times altogether: once in number 1, once in number 10, twice in number 11, once in number 12 and once in number 13.

## [Task 001](./001)

### Description:

Write a function that receives two sequences: A and B of integers and returns one sequence C. Sequence C should contain all elements from sequence A (maintaining the order) except those, that are present in sequence B <i>p</i> times, where <i>p</i> is a prime number.

### Example:

A = [2, 3, 9, 2, 5, 1, 3, 7, 10]  
B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]  
C = [2, 9, 2, 5, 7, 10]

## [FizzBuzz](./FizzBuzz)

### Description:

The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:

1. For every number that is divisible by 3 and 5, console log "FizzBuzz".
2. For every number that is divisible by only 3 and not 5, console log "Fizz".
3. For every number that is divisible by only 5 and not 3, console .log "Buzz".

### Example:

```
...
"Fizz"
13
14
"FizzBuzz"
16
17
"Fizz"
19
"Buzz"
...
```
