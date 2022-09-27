/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = 'abcabcbb';
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = 'bbbbb';
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = 'pwwkew';
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = 'dvadf';
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
  let maxLength = 0;
  let currentLength = 0;
  const lettersSeen = {};
  for(let i = 0; i < str.length; i++){
    const currentLetter = str[i]
    if(currentLetter in lettersSeen){
      currentLength = i - lettersSeen[currentLetter] - 1
    }
    lettersSeen[currentLetter] = i
    currentLength++
    if(currentLength > maxLength) maxLength = currentLength
  }

  return maxLength;
}

console.log(lengthOfLongestSubString(str4))