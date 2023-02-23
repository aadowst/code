// https://leetcode.com/problems/longest-common-subsequence/

// Runtime:  110 ms (beats 83.35%)
// Memory:  61.3 MB (beats 73.48%)
// Strategy:  used dynamic programming with a 2d array to store results of subproblems. If the characters at the indexes match, the subsequence length is 1 plus the value from the lookup table that is one bigger than each index. If not, then the subsequence length is the max comparison of the cells to the right vs. below (representing subproblems where one string is shortened by a digit vs the other is shorted by a digit.)
// Reference:  https://www.youtube.com/watch?v=ASoaQq66foQ  (note:  my solution improved by working from the end of each string and building up to the full length of each; additionally, the indexes of the 2d array correspond to the indexes of the characters in each string)

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
	const dpArray = Array(text1.length + 1).fill(0).map(() => Array(text2.length + 1).fill(0))
	for(let row = text1.length - 1; row >= 0; row--){
			for(let column = text2.length -1; column >= 0; column--){
				const indexOf1 = row
				const indexOf2 = column
					if(text1[indexOf1] === text2[indexOf2]){
							dpArray[row][column] = 1 + dpArray[row + 1][column + 1]
					}else{
							dpArray[row][column] = Math.max(dpArray[row + 1][column], dpArray[row][column + 1])
					}
			}
	}
	return dpArray[0][0]
};

// Runtime:  797 ms (beats 11.42%)
// Memory:  153.4 MB (beats 7.49%)
// Comment:  Memoized the recursive calls
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequenceMemoized = function(text1, text2) {
	const seen = new Map()
	const textA = text1
	const textB = text2
	return findSubsequence(textA.length-1, textB.length -1)

	function findSubsequence(endOfA, endOfB){
			if(endOfA < 0 || endOfB < 0) return 0

			const indexString = `${endOfA},${endOfB}`
			if(seen.has(indexString)) return seen.get(indexString)

			let subsequenceLength = 0;
			if(textA[endOfA] === textB[endOfB]){
					subsequenceLength = 1 + findSubsequence(endOfA - 1, endOfB -1)
			}else{
					subsequenceLength = Math.max(findSubsequence(endOfA, endOfB - 1), findSubsequence(endOfA - 1, endOfB))
			}
			seen.set(indexString, subsequenceLength)
			return subsequenceLength;
	}
};


// Comment:  tried to avoid the timeout, by only passing strings made with common characters to the recursive function
var longestCommonSubsequenceWithSets = function (text1, text2) {
  const charsText1 = new Set();
  for (const char of text1) {
    charsText1.add(char);
  }
  const subsequenceText2 = [];
  const commonChars = new Set();
  for (const char of text2) {
    if (charsText1.has(char)) {
      commonChars.add(char);
      subsequenceText2.push(char);
    }
  }
  if (commonChars.size === 0) return 0;
  const subsequenceText1 = [];
  for (const char of text1) {
    if (commonChars.has(char)) {
      subsequenceText1.push(char);
    }
  }
  return findSubsequence(subsequenceText1.join(""), subsequenceText2.join(""));

  function findSubsequence(textA, textB) {
    if (textA.length === 0 || textB.length === 0) return 0;
    let subsequenceLength = 0;
    if (textA[textA.length - 1] === textB[textB.length - 1]) {
      subsequenceLength =
        1 + findSubsequence(textA.slice(0, -1), textB.slice(0, -1));
    } else {
      subsequenceLength = Math.max(
        findSubsequence(textA, textB.slice(0, -1)),
        findSubsequence(textA.slice(0, -1), textB)
      );
    }
    return subsequenceLength;
  }
};


// Comment:  recursive approach. times out on leetcode
// Strategy:  compare the last digits of the strings. 
//If they are the same, increment subsequence length and  add the return of calling the function again, removing the last digit of both strings. 
// If they are different, compare the returns of calling the function with one string missing its last digit with calling the function with the other missing its last digit. Add whichever is larger to the subsequence length

var longestCommonSubsequenceRecursiveBruteForce = function(text1, text2) {
	return findSubsequence(text1, text2)

	function findSubsequence(textA, textB){

			if(textA.length === 0 || textB.length === 0) return 0
			let subsequenceLength = 0;
			if(textA[textA.length -1] === textB[textB.length - 1]){
					subsequenceLength = 1 + findSubsequence(textA.slice(0, -1), textB.slice(0, -1))
			}else{
					subsequenceLength = Math.max(findSubsequence(textA, textB.slice(0, -1)), findSubsequence(textA.slice(0, -1), textB))
			}
			return subsequenceLength;
	}
};