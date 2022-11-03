// from:  https://leetcode.com/problems/happy-number

// Comment:  removed Lookup table, since multiplication is such a simple process
// Runtime:  102 ms (63.56%)
// Memory Usage: 44.1 MB (47.40%)
var isHappyFastestYet = function(n) {
  const seen = new Set();
  while (n != 1) {
    const numArray = [...("" + n)];
    let squares = numArray.map((num) => num*num);
    n = squares.reduce((previous, current) => previous + current);
    if (seen.has(n)) return false;
    seen.add(n);
  }
  return true;
};
    


// Frankensteined ideas seen in other solutions. Lookup table might be faster than squaring (slightly dubius), it is faster to set keys on sets/maps vs. objects and .map and .reduce are fun

// Runtime:  107 ms (55.32%)
// Memory Usage: 44.4 MB (31.64%)
var isHappyAgain = function (n) {
  const squareLookup = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,
    5: 25,
    6: 36,
    7: 49,
    8: 64,
    9: 81,
  };
  const seen = new Set();
  while (n != 1) {
    const numArray = [...("" + n)];
    let squares = numArray.map((num) => squareLookup[num]);
    n = squares.reduce((previous, current) => previous + current);
    if (seen.has(n)) return false;
    seen.add(n);
  }
  return true;
};

// Original Solution
// Runtime:  187 ms (5.89%)
// Memory Usage: 49.7 MB (5.02%)

var isHappy = function (n, seen = {}) {
  if (n === 1) return true;
  if (n in seen) return false;
  const numString = n.toString();
  let runningSum = 0;
  for (let i = 0; i < numString.length; i++) {
    const square = parseInt(numString[i]) ** 2;
    console.log(square);
    runningSum += square;
  }
  seen[n] = true;

  return isHappy(runningSum, seen);
};

console.log(isHappyAgain(19))