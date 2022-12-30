// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

// Comment:  Not 100% the same as standard trie strutures (doesn't use tree nodes)
// Runtime:  10298 ms (beats 5.2%)
// Memory Usage:  78.1 MB (beats 84.51%)

var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const char of word) {
    if (!node[char]) node[char] = {};
    node = node[char];
  }
  node.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, node = this.root) {
  if ((word.length = 0)) return true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ".") {
      const keys = Object.keys(node);
      for (key of keys) {
        if (this.search(word.slice(i + 1), node[key])) return true;
      }
      return false;
    }
    if (!node[word[i]]) return false;
    node = node[word[i]];
  }
  return node.endOfWord ? true : false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
