// https://leetcode.com/problems/decode-ways/

const string1 = "226";
const string2 = "111111111111111111111111111111111111111111111";
const string3 = "11106";

// Runtime:  75 ms (beats 53.33%)
// Memory: 41.7 MB (beats 97.91%)
// Strategy:  dynamic programming
/**
 * @param {string} s
 * @return {number}
 */
var numDecodingsDP = function(s) {
  const dpArray = Array(s.length + 1).fill(0);
  dpArray[s.length] = 1;  // seed the array with a 1 at the end. If the one digit and/or two digit codes at the end are valid, they will add the one to the values at their indexes
  for (let i = s.length - 1; i >= 0; i--) {
		if(s[i] == "0"){
        dpArray[i] = 0
        continue
        } 
		dpArray[i] = dpArray[i + 1]
		const char = s.slice(i, i + 2);
		if(i + 1 < s.length && parseInt(char) <= 26){  // check to see if char is a valid two digit number
			dpArray[i] += dpArray[i+2]
		}
	}

	return dpArray[0]
}

// Runtime:  70 ms (beats 72.2%)
// Memory:  44.4 MB (beats 22.17%)
// Strategy:  memoized my original, recursive solution
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  var memo = new Map();
  function recursive(index, length) {
    if (memo.has(`${index},${length}`)) return memo.get(`${index},${length}`);
    if (index + length > s.length) return 0;
    if (s[index] === "0") return 0;
    const char = s.slice(index, index + length);
    if (parseInt(char) > 26) return 0;
    if (index + length == s.length) return 1;
    let result = recursive(index + length, 1) + recursive(index + length, 2);
    memo.set(`${index},${length}`, result);
    return result;
  }
  return recursive(0, 1) + recursive(0, 2);
};

// Runtime 96 ms (beats 32%)
// Memory:  45.5 MB (beats 16.5%)
// Strategy:  converted solution from neetcode into JS
var numDecodingsMemo1 = function (s) {
  var memo = new Map();
  memo.set(s.length, 1);
  function recursive(index) {
    if (memo.has(index)) {
      return memo.get(index);
    }
    if (s[index] === "0") {
      return 0;
    }

    let result = recursive(index + 1);
    const char = s.slice(index, index + 2);
    console.log(char);
    if (index + 1 < s.length && parseInt(char) <= 26) {
      result += recursive(index + 2);
    }
    memo.set(index, result);
    return result;
  }
  return recursive(0);
};

// Comment:  it works, but takes super long with long strings! (took 206 seconds to do string2!)
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  function recursive(index, length) {
    if (index + length > s.length) return 0;
    if (s[index] === "0") return 0;
    const char = s.slice(index, index + length);
    if (parseInt(char) > 26) return 0;
    if (index + length == s.length) return 1;
    return recursive(index + length, 1) + recursive(index + length, 2);
  }
  return recursive(0, 1) + recursive(0, 2);
};

console.log(numDecodingsMemo(string1));
