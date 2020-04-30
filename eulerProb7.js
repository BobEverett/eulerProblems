/* 
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

function primeChecker(num) {
  if ((num === 1) || (num === 2) || (num === 3)) {
    prime = true;
  }
  else {
    for (let i = (Math.floor(Math.sqrt(num))); i > 1; i--) {
      if ((num % i) !== 0) {
        var prime = true;
      }
      else {
        var prime = false;
        break
      }
    }
  }
  return prime;
}

let z = 1;
let primeCounter = 0;
let nthPrime = 10001;

while (primeCounter <= (nthPrime)) {
  if (primeChecker(z) === true) {
    if (primeCounter !== nthPrime) {
      primeCounter++;
    }
    else {
      console.log(`${z} is the ${nthPrime}th prime number`);
      break;
    }
  }
  z++;
}
