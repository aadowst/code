// From:  https://leetcode.com/problems/longest-repeating-character-replacement/

// Comment:  this approach finds the longest possible valid window (length <= count of most freq character + k). If a window is valid, the right pointer is moved. If not, the left pointer is moved until it is
var characterReplacement = function (s, k) {
  let maxCount = 0;
  let length = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  let charCountInWindow = 0;
  while (rightPointer < s.length) {
    const rightChar = s[rightPointer];
    charCountInWindow[rightChar] = charCountInWindow[rightChar] || 1;
    maxCount = Math.max(maxCount, charCountInWindow[rightChar]);

		// if invalid window, then move left pointer and decrement the counts of the characters no longer included.
    while (rightPointer - leftPointer + 1 - maxCount > k) {
			const leftChar = s[leftPointer]
			charCountInWindow[leftChar]--
			leftPointer++
		}
		length = Math.max(length, rightPointer - leftPointer + 1)
		// increment rightPointer in attempt to increase max window width
		rightPointer++
  }
  return length;
};

// Runtime: 766 ms, faster than 10.66% of JavaScript online submissions for Longest Repeating Character Replacement.
// Memory Usage: 42.1 MB, less than 93.97% of JavaScript online submissions for Longest Repeating Character Replacement.

// Comment:  used an iterative sliding window approach. The window starts at the first character that is different from the previous sequence and continues until all swaps have been used an a different character is discovered. This approach is slower than others, because it restarts the window with each new iteration
var characterReplacementIterativeWindow = function (s, k) {
  let maxCount = 0;
  let count = 0;
  let nextStart = 0;
  let windowEnd = 0;
  let swaps = k;
  for (let i = 0; i < s.length; ) {
    const char = s[i];
    nextStart = i + 1;
    windowEnd = i;
    swaps = k;
    count = 0;
    while (swaps >= 0 && windowEnd < s.length) {
      if (s[windowEnd] !== char) {
        // start the next window at the first instance of a character different from char
        if (swaps === k) nextStart = windowEnd;
        swaps--;
        if (swaps < 0) break;
      }
      windowEnd++;
      count = windowEnd - i;
      maxCount = Math.max(count, maxCount);
    }
    if (windowEnd == s.length) break;
    i = nextStart;
  }
  // if there were unused swaps when the end of the string is reached, these are added to the count. maxCount cannot exceed the length of the string.
  count += swaps;
  maxCount = Math.max(count, maxCount);
  maxCount = Math.min(maxCount, s.length);
  return maxCount;
};

console.log(characterReplacement("ABBB", 2));
