/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

function getFactors(num) {
  let numfactors = [];
  for (let i = Math.floor(Math.sqrt(num)); i > 1; i--) {
    if ((num % i) === 0) {
      numfactors.push(i);
      numfactors.push(num / i)
    }
  }
  return numfactors.sort((a, b) => a - b);
}

function primeChecker(num) {
  for (let i = (Math.floor(Math.sqrt(num))); i > 1; i--) {
    if (((num % i) !== 0) || (num === 3) || (num === 2)) {
      var prime = true;
    }
    else {
      var prime = false;
      break
    }
  }
  return prime;
}

for (let j = 356765; j < 356855; j++) {
  let factors = getFactors(j);
  let primeFactors = [];

  factors.forEach(function(num) {
    if (primeChecker(num) == true) {
      primeFactors.push(num);
    }
  });
  if ((primeFactors.length < 1) && (j % 3 === 0)) {
    console.log(`Number: ${(j.toString().padEnd(20))} Max Prime Factor: 3`);
  }
  else if ((primeFactors.length < 1) && (j % 2 === 0)) {
    console.log(`Number: ${(j.toString().padEnd(20))} Max Prime Factor: 2`);
  }
  else if (primeChecker(j) == true) {
    console.log(`Number: ${(j.toString().padEnd(20))} Max Prime Factor: Number is prime`);
  }
  else {
    console.log(`Number: ${(j.toString().padEnd(20))} Max Prime Factor: ${Math.max(...primeFactors)}`);
  }
}







/*
function getFactors(num) {
  let numfactors = [];
  for (let i = Math.floor(Math.sqrt(num)); i > 1; i--) {
    if ((num % i) === 0) {
      numfactors.push(i);
      numfactors.push(num / i)
    }
  }
  return numfactors.sort((a, b) => a - b);
}

function primeChecker(num) {
  for (let i = (Math.floor(Math.sqrt(num))); i > 1; i--) {
    if ((num % i) !== 0) {
      var prime = true;
    }
    else {
      var prime = false;
      break
    }
  }
  return prime;
}

let number = 111;
let factors = getFactors(number);
let primeFactors = [];

factors.forEach(function(num) {
  if (primeChecker(num) == true) {
    primeFactors.push(num);
  }
});

console.log(`\nThe prime factors are (${primeFactors}).\n`);

console.log(`The largest prime factor of ${number} is ${Math.max(...primeFactors)}.\n`);


*/

/* section below is the test function for primeChecker


let primeSet = [];
for (let i = 5; i < 53; i++) {
  if (primeChecker(i) == true) {
    primeSet.push(i);
  }
}

let knownPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
let primeMistakes = []

for (let n in primeSet) {
  if (n in knownPrimes) {
    continue;
  }
  else {
    primeMistakes.push(n);
  }
}

const doubleCheck = primeSet.every(val => knownPrimes.includes(val));
console.log(`
    doubleCheck is $ { doubleCheck }
    `);


if (doubleCheck === true) {
  console.log('All primes test is successful');
}
else {
  console.log('Non prime numbers are listed as prime.  Need to debug function');
}

*/
