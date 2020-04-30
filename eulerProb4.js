/*
A palindromic number reads the same both ways. The largest palindrome made from the product of 
two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(string) {
  if (string.length === 0 || string.length === 1) {
    return true;
  }
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1));
  }
  return false;
};



let rootx = 999;
let y = 999;
let x = rootx;
let sum = x * y;
let maxPal = [];


do {
  if (x == y) {
    x = rootx;
    y--;
  }
  else {
    x--;
  }
  sum = x * y;
  if (isPalindrome(String(sum))) {
    console.log(x + 'x' + y + '=' + sum + ' | this number is a palindrome');
    maxPal.push(sum);
  }
}
while (x > 700);

console.log(maxPal);
console.log(Math.max(...maxPal));


//console.log(isPalindrome('RobtomotboR'));
/*


let x = 999;
let y = 999;
let i = 0;
let sum = String(x * y);

function isPalindrome(product) {
  let chars = product.split('');
  let isPal = true;
  do {
    if (String(chars.slice(0, 1)) === String(chars.slice(-1))) {
      isPal = true;
      chars.shift();
      chars.pop();
    }
    else {
      isPal = false;
      break;
    }

  } while ((chars.length > 1) && (isPal == true))
  return isPal
}


while ((x > 0) && (y > 0) && (isPalindrome(sum) !== true)) {

  if (i % 2 !== 0) {
    y--;
  }
  else {
    x--;
  }
  i++;
  sum = String(x * y);
}

console.log(`${sum} is the largest product that is a palindrome (${x} * ${y})`)

x = 999;
y = 999;

sum = String(x * y)

while ((x > 0) && (y > 0) && (isPalindrome(sum) !== true)) {
  x--;
  sum = String(x * y);
}

console.log(`${sum} is the largest product that is a palindrome (${x} * ${y})`)
*/



/*

let x = 999999;

let isAPal = [];
  
};


function isPalindrome(product) {
  let chars = product.split('');
  let isPal = true;
  do {
    if (String(chars.slice(0, 1)) === String(chars.slice(-1))) {
      isPal = true;
      chars.shift();
      chars.pop();
    }
    else {
      isPal = false;
      break;
    }

  } while ((chars.length > 1) && (isPal == true))
  return isPal
}

do {
  x = String(x)
  let sum = String(Number(x.slice(0, 3)) * (Number(x.slice(3, 6))));

  if (isPalindrome(sum) == true) {
    isAPal.push([x, sum]);
  }

  x--;

} while (x > 100001);

console.log(isAPal);
*/


/*

// text palindrome with double counters

let name = ['4545454', 'bob', 'stats', 'madam', 'rocky', 'rotator', 'topspot'];


for (let entry of name) {
  let j = entry.length - 1;
  let i = 0;
  let isPalindrome = true

  do {
    if (i === j) {
      console.log(entry[i]);
      break;
    }
    else if (entry[i] === entry[j]) {
      console.log(`${entry[i]} | ${entry[j]}`);
    i++;
    j--;
  }
  else {
    isPalindrome = false;
  }
} while ((i <= j) && (isPalindrome !== false));

if (isPalindrome !== false) {
  console.log(`${entry} is a palindrome`);
}
else {
  console.log(`${entry} is not a palindrome`);
}
}

*/
