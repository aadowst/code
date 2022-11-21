// from:  https://leetcode.com/problems/evaluate-reverse-polish-notation/

// Comment:  saw other solutions using equations saved in objects, so wrote my own. Way faster!
// Runtime: 92 ms, faster than 80.57% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// Memory Usage: 44.9 MB, less than 68.50% of JavaScript online submissions for Evaluate Reverse Polish Notation.
var evalRPN = function (tokens) {
  const operations= {"+": (a,b) => a + b, "-": (a,b) => a - b, "*": (a,b) => a * b, "/": (a,b) => Math.trunc(a/b)}
  const stack = [];
  for (const token of tokens) {
    if (!operations[token]) {
      stack.push(parseInt(token, 10));
    } else {
      const top = stack.pop();
      const next = stack.pop();
      let result = operations[token](next, top)
			stack.push(result)
    }
  }
	return stack[0]
};

// Runtime: 135 ms, faster than 25.70% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// Memory Usage: 44.8 MB, less than 68.50% of JavaScript online submissions for Evaluate Reverse Polish Notation.
var evalRPNSet = function (tokens) {
  const operatorArray = ["+", "-", "*", "/"]
  const operators = new Set(operatorArray)
  const stack = [];
  for (const token of tokens) {
    if (!operators.has(token)) {
      stack.push(parseInt(token, 10));
    } else {
      const top = stack.pop();
      const next = stack.pop();
      let result;
      if (token === "+") result = next + top;
      else if (token === "-") result = next - top;
      else if (token === "*") result = next * top;
      else result = Math.trunc(next / top);
			stack.push(result)
    }
  }
	return stack[0]
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))