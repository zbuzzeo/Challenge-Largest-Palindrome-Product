Largest Palindrome Product
===========
A palindromic number reads the same both ways. Your function takes in two arguments which are both of the Number Data type.

The **first argument** represents the number of **multiplicand(s)**.

    5 x 7 = 35

    7 is the mutiplicand
    5 is the multiplier

The **second argument** sets the requirement for the **total digits** in a factor.

    10 is a two-digit number
    1996 is a four-digit number

So, if our function were given the values `1, 2` to find the largest palindromic number you would mutiply all numbers between 10 and 99. Anything number less than 10 only have one-digit and numbers above 99 have three-digits.

There are **2** tests initially, make the tests pass.

1. Find the largest palindrome made from the product of 2 two-digit numbers is 9009 = 91 × 99.
1. Find the largest palindrome made from the product of 2 three-digit numbers. Write two tests that check the return object for the correct factor values.

## Getting Started
1. Clone this repository
2. To retrieve all dependecies, run the command: `npm install`
3. Your work will be done in the file named: `largest_palindrome_product.js`
4. Run your test with the command: `npm test`
5. There are two tests total. Make them pass!

### Bonus Round
What if you were given `2, 2`? One example of two multiplicands with two-digits would be:

    10 x 67 x 89 = 59630;

## References
[Multiplicand on Wolfram](http://mathworld.wolfram.com/Multiplicand.html)
[Multiplier](http://mathworld.wolfram.com/Multiplier.html)
[Palindrome](http://en.wikipedia.org/wiki/Palindrome)

### _From Project Euler Problem 4_