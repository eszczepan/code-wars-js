# Algorithms challenges

## [Task 020](./020)

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

## [Task 019](./019)

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

## [Task 018](./018)

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

## [Task 017](./017)

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

## [Task 016](./016)

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

## [Task 015](./015)

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

## [Task 014](./014)

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

## [Task 013](./013)

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

## [Task 012](./012)

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

## [Task 011](./011)

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

## [Task 010](./010)

### Description:

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

### Example:

```
addBinary(1, 2)) should return 11
```

### Link:

[Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139)

## [Task 009](./009)

### Description:

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

### Example:

```
The binary representation of 1234 is 10011010010, so the function should return 5 in this case
```

### Link:

[Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4)

## [Task 008](./008)

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

## [Task 007](./007)

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

## [Task 006](./006)

### Description:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

### Example:

```
sumTwoSmallestNumbers([19, 5, 42, 2, 77]) // output should be 7
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) // should return 3453455
```

### Link:

[Sum of two lowest positive integers](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

## [Task 005](./005)

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

## [Task 004](./004)

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

## [Task 003](./003)

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
