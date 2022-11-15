// from:  https://leetcode.com/problems/longest-substring-without-repeating-characters
// Runtime: 136 ms, faster than 74.16% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 47.4 MB, less than 60.84% of JavaScript online submissions for Longest Substring Without Repeating Characters.

var lengthOfLongestSubstring = function(str) {
  let maxLength = 0;
  let currentLength = 0;
  const lettersSeen = {};
  let leftPointer = 0;
  let rightPointer = 0
  while(rightPointer < str.length){
    const currentLetter = str[rightPointer]
    if(currentLetter in lettersSeen){
      // only move leftPointer if the repeated letter is to its right
      leftPointer = Math.max(leftPointer, lettersSeen[currentLetter] + 1)
    }
    lettersSeen[currentLetter] = rightPointer
    currentLength = rightPointer-leftPointer + 1
    maxLength = Math.max(maxLength, currentLength)
    rightPointer++
  }
  return maxLength;
}
console.log(lengthOfLongestSubstring("tmmzuxt"))
