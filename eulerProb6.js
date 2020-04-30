/*
The sum of the squares of the first ten natural numbers is,

12+22+...+102=385
The square of the sum of the first ten natural numbers is,

(1+2+...+10)2=552=3025
Hence the difference between the sum of the squares of the first ten natural numbers 
and the square of the sum is 3025−385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers 
and the square of the sum.
*/

let sumSquares = 0;
let squareSum = 0;
let tempSum = 0;

for (let i = 1; i <= 100; i++) {
  sumSquares += i ** 2;
  tempSum += i;
}

squareSum = tempSum ** 2;
console.log(`The difference is ${squareSum-sumSquares}.`);
