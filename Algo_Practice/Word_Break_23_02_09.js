// https://leetcode.com/problems/word-break/

// Runtime:  68 ms (beats 83.18%)
// Memory:  43.7 MB (beats 63.52%)
// Comment:  DP similar to solution below, but faster because it uses slice to determine if there is a match (vs. indexOf)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dpArray = Array(s.length + 1);

  dpArray[0] = true;
  for (let i = 0; i <= dpArray.length; i++) {
    if (dpArray[i] == true) {
      for (const word of wordDict) {
        if (s.slice(i, i + word.length) == word) dpArray[i + word.length] = true;
      }
    }
  }
  return dpArray[s.length] ? true : false;
};

// Runtime:  77 ms (beats 51.31%)
// Memory:  42 MB (beats 99.29%)
// Comment:  uses DP
var wordBreakDP = function (s, wordDict) {
  const dpArray = Array(s.length + 1);

  dpArray[0] = true;
  for (let i = 0; i <= dpArray.length; i++) {
    if (dpArray[i] == true) {
      for (const word of wordDict) {
        if (s.indexOf(word, i) == i) dpArray[i + word.length] = true;
      }
    }
  }
  return table[s.length] ? true : false;
};

// Runtime:  67 ms (beats 86.30%)
// Memory:  43.7 MB (beats 56.7%)
// Strategy:  DFS
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  wordDict.sort((a, b) => b.length - a.length);
  const visited = new Set();
  let output = false;

  dfs(0);

  function dfs(i) {
    if (visited.has(i)) return;
    visited.add(i);
    if (output == true) return;
    if (i > s.length) return;
    if (i === s.length) {
      output = true;
      return;
    }
    const wordsAtIndex = findWordAtIndex(i);
    for (const word of wordsAtIndex) {
      dfs(i + word.length);
    }
  }

  function findWordAtIndex(i) {
    if (output == true) return;
    const wordsAtIndex = [];
    for (const word of wordDict) {
      if (s.indexOf(word, i) == i) wordsAtIndex.push(word);
    }
    return wordsAtIndex;
  }
  return output;
};
