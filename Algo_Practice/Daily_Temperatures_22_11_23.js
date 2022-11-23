// from:  https://leetcode.com/problems/daily-temperatures/

// Comment:  loop through the temperatures. If the current temp is greater than previous day(s), remove those day(s) from the stack and determine the difference between current idx and previous day(s)'. Then push current temp and index to the stack. The last entry of the stack is always the lowest in it.
// Runtime: 617 ms, faster than 39.32% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 85.3 MB, less than 5.72% of JavaScript online submissions for Daily Temperatures.
var dailyTemperatures = function(temperatures){
	let answer = Array(temperatures.length).fill(0)
	let stack = []
	for(let i = 0; i< temperatures.length; i++){
		const temp = temperatures[i];
		while(stack.length > 0 && temp > stack.at(-1)[0]){
			const coolerTemp = stack.pop()
			const coolerTempIdx = coolerTemp[1]
			answer[coolerTempIdx] = i-coolerTempIdx
		}
		stack.push([temp, i])
	}
	return answer
}


// Runtime: 5277 ms, faster than 10.15% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 68.4 MB, less than 32.68% of JavaScript online submissions for Daily Temperatures.
// Comment:  nested loop unsurprisingly slow

var dailyTemperaturesBruteForce = function (temperatures) {
  let answer = [];
  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temp) {
        answer.push(j - i);
        break;
      }
    }
    if (answer.length < i + 1) answer.push(0);
  }
  return answer;
};
