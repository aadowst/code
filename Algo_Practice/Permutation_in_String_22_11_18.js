// Comment:  since the size of the window is known, keep this fixed. Keep track of search characters as they enter or exit the window. 
// Runtime: 244 ms, faster than 30.42% of JavaScript online submissions for Permutation in String.
// Memory Usage: 48.9 MB, less than 25.63% of JavaScript online submissions for Permutation in String.
var checkInclusion = function (s1, s2) {
  const searchLetters = {};
  for (let char of s1) {
    searchLetters[char] = searchLetters[char] + 1 || 1;
  }
  // left lags behind right
  let left = 1 - s1.length;
  let right = 0;
  let count = s1.length;
  while (right < s2.length) {
    if (Object.hasOwn(searchLetters, s2[right])) {
      count--;
      searchLetters[s2[right]]--;
      if (count === 0) {
        const values = Object.values(searchLetters);
        if (values.every((val) => val === 0)) return true;
      }
    }
    // since window isn't a permutation of s1, it will be shifted. if char at left was part of s1, increment its count
    if (Object.hasOwn(searchLetters, s2[left])) {
      count++;
      searchLetters[s2[left]]++;
    }
    left++;
    right++;
  }
  return false;
};

// Runtime: 6766 ms, faster than 5.63% of JavaScript online submissions for Permutation in String.
// Memory Usage: 48.5 MB, less than 36.35% of JavaScript online submissions for Permutation in String.
var checkInclusionCopyingObjects = function (s1, s2) {
  const searchLetters = {};
  for (let char of s1) {
    searchLetters[char] = searchLetters[char] + 1 || 1;
  }
  let left = 0;
  let right = 0;
  while (left < s2.length && right < s2.length) {
    if (!Object.hasOwn(searchLetters, s2[left])) left++;
    else {
      const searchLettersCopy = { ...searchLetters };
      let letterCount = s1.length;
      right = left;
      while (searchLettersCopy[s2[right]] > 0 && right < s2.length) {
        searchLettersCopy[s2[right]]--;
        letterCount--;
        if (letterCount === 0) return true;
        right++;
      }
      left++;
    }
  }
  return false;
};

console.log(checkInclusion("adc", "dcda"));
