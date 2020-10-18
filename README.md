# Algorithms tasks

## [Task 008](./008)

### Task:

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

### Task:

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

### Task:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

### Example:

```
sumTwoSmallestNumbers([19, 5, 42, 2, 77]) // output should be 7
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) // should return 3453455
```

### Link:

[Sum of two lowest positive integers](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

## [Task 005](./005)

### Task:

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

### Task:

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

### Task:

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

### Task:

Write a function that given an intiger N, returns the number of times digit 1 occurs in decimal representations of all positive integers not exceeding N. N is an integer within the range [0...100,000]

### Example:

Given N = 13 the function should return 6, because:

- all the positive integers do not exceed 13 are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 and 13;
- digit 1 occurs six times altogether: once in number 1, once in number 10, twice in number 11, once in number 12 and once in number 13.

## [Task 001](./001)

### Task:

Write a function that receives two sequences: A and B of integers and returns one sequence C. Sequence C should contain all elements from sequence A (maintaining the order) except those, that are present in sequence B <i>p</i> times, where <i>p</i> is a prime number.

### Example:

A = [2, 3, 9, 2, 5, 1, 3, 7, 10]  
B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]  
C = [2, 9, 2, 5, 7, 10]

## [FizzBuzz](./FizzBuzz)

### Task:

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
