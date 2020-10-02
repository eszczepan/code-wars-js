# Algorithms tasks

## [Task 002](./001)

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
