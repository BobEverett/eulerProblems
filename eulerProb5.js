/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/
/*
let num = 0;

function factorCheck(num) {
  let result = true;
  do {
    for (let i = 0; i < 10; i++) {
      if ((num % i) == 0) {
        result = true;
      }
      else {
        result = false;
      }
    }
  } while (result == true);
}

let numCheck = 40;
let allFactors;

for (let j = numCheck; j < 200; j += 20) {
  do {
    allFactors = factorCheck((numCheck));
    if (allFactors) {
      console.log(`${allFactors} is divisible by all the numbers from 1 to 20`);
    }
    else {
      console.log(numCheck);
    }
  } while (allFactors !== true);
}
*/

function factorCheck(num) {
  let result = true;

  for (let i = 2; i < 20; i++) {
    if ((num % i) == 0) {
      result = true;
    }
    else {
      result = false;
      break;
    }

  }
  return result
}

/*
let numCheck = 20;
let allFactors;
let j = 20;

while (factorCheck((j)) === false) {
  allFactors = factorCheck(j);
  if (allFactors) {
    console.log(`${j} is divisible by all the numbers from 1 to 20`);
    break;
  }
  j += 20;
}
console.log("No result");

*/

let numCheck = 40;
let allFactors;

for (let j = numCheck; j < 300000000; j += 20) {
  allFactors = factorCheck((j));
  if (allFactors) {
    console.log(`${j} is divisible by all the numbers from 1 to 20`);
    break;
  }
}
console.log("No result");
