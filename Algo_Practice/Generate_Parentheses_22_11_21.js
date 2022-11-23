// from:  https://leetcode.com/problems/generate-parentheses/
// Runtime: 99 ms, faster than 54.22% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 43 MB, less than 44.20% of JavaScript online submissions for Generate Parentheses.
var generateParenthesis = function (n) {
  const outputArray = [];
  recursiveHelper("", n, n);
  return outputArray;

  function recursiveHelper(string, openRemaining, closedRemaining) {
    if (openRemaining === 0 && closedRemaining === 0) outputArray.push(string);
    if (openRemaining > closedRemaining) return;
    if (openRemaining > 0)
      recursiveHelper(string + "(", openRemaining - 1, closedRemaining);
    if (closedRemaining > 0)
      recursiveHelper(string + ")", openRemaining, closedRemaining - 1);
  }
};

// Comment: iterative strategy v. fast!
// Runtime: 55 ms, faster than 99.52% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 43.2 MB, less than 42.08% of JavaScript online submissions for Generate Parentheses.
var generateParenthesisIterativeLoopsRefactored = function (n) {
  const returnArray = [];
  let object = { string: "", n: n, open: 0 };
  const array = [object];

  while (array.length > 0) {
    const item = array.pop();

    if (item.n == 0 && item.open == 0) {
      returnArray.push(item.string);
    } else {
      if (item.open > 0) {
        let stringClose = item.string;
        stringClose += ")";
        const newObjectClose = {
          string: stringClose,
          n: item.n,
          open: item.open - 1,
        };
        array.push(newObjectClose);
      }
      if (item.n > 0) {
        item.string += "(";
        item.n--;
        item.open++;
        array.push(item);
      }
    }
  }
  return returnArray;
};

// Runtime: 132 ms, faster than 10.99% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 44 MB, less than 25.41% of JavaScript online submissions for Generate Parentheses.
// Comment: needs refactoring for sure!
var generateParenthesisIterativeLoops = function (n) {
  let object = { string: "", n: n, open: 0 };
  const array = [object];
  let isDone = false;
  while (!isDone) {
    isDone = true;
    for (const item of array) {
      if (item.n == 0 && item.open == 0) continue;
      else {
        isDone = false;
        if (item.n == 0) {
          let string = item.string;
          while (item.open > 0) {
            string += ")";
            item.open--;
          }
          item.string = string;
          continue;
        }
        if (item.open > 0) {
          let stringClose = item.string;
          stringClose += ")";
          const newObjectClose = {
            string: stringClose,
            n: item.n,
            open: item.open - 1,
          };
          array.push(newObjectClose);
        }
        let stringOpen = item.string;
        stringOpen += "(";
        item.string = stringOpen;
        item.n--;
        item.open++;
      }
    }
  }
  return array.map((item) => item.string);
};

console.log(generateParenthesisIterativeLoopsRefactored(3));
