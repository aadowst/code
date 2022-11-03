// from:  leetcode.com/problems/plus-one

// Comment:  way faster to use spread operator than unshift()
// Runtime:  82 ms (74.19%)
// Memory Usage:  41.9 MB (72.14%)
var plusOneFaster = function (digits) {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1] += 1;
    return digits;
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) digits[i] = 0;
    else {
      digits[i] += 1;
      break;
    }
  }
  if (digits[0] === 0) digits = [1, ...digits];
  return digits;
};

// Comment:  other people used BigInt, which can accept a string or a number an input and added 1 to it (specifically BigInt(1) or 1n (note:  the n denotes the BigInt type)). Some of the test cases were too large for the number type to be used, so the digits were first converted to a string.


// Source:  https://leetcode.com/problems/plus-one/discuss/2520098/Easy-JavaScript-Solution
// Runtime:  92 ms (59.08%)
// Memory Usage:  42.1 MB (50.82%)
var plusOneFromSomeoneElse = function (digits) {
  let str = digits.join("");
  let num = BigInt(str) + BigInt(1);
  num = num
    .toString()
    .split("")
    .map((num) => parseInt(num));
  return num;
};

// Original Solution
// Runtime:  104 ms (30.91%)
// Memory Usage: 41.8 MB (72.14%)

var plusOne = function (digits) {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1] += 1;
    return digits;
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) digits[i] = 0;
    else {
      digits[i] += 1;
      break;
    }
  }
  if (digits[0] === 0) digits.unshift(1);
  return digits;
};
