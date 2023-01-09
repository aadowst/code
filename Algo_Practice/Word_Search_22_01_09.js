// https://leetcode.com/problems/word-search/

// Runtime: 705 ms (beats 68.41%)
// Memory: 42.6 MB (beats 78.66%)
// Comment: eliminated the Set and modified the board when a letter was used

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let wordFound = false;

  function generateWords(index = 0, row = 0, column = 0) {
    if (wordFound) return;
    if (
      row < 0 ||
      column < 0 ||
      row >= board.length ||
      column >= board[0].length
    )
      return;
    const letter = board[row][column];
    if (letter !== word[index]) return;
    if (index == word.length - 1) {
      wordFound = true;
      return;
    }
    board[row][column] = 0;
    generateWords(index + 1, row, column + 1);
    generateWords(index + 1, row, column - 1);
    generateWords(index + 1, row - 1, column);
    generateWords(index + 1, row + 1, column);
    board[row][column] = letter;
  }

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[0].length; column++) {
      generateWords(0, row, column);
      if (wordFound == true) {
        return true;
      }
    }
  }
  return wordFound;
};

// Runtime:  2269 ms (beats 20.75%)
// Memory:  48.7 MB (beats 25.42%)
// Comment: using Set. which gets regenerated at the start of each search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var existSet = function (board, word) {
  let wordFound = false;
  let lettersUsed = new Set();

  function generateWordsSet(index = 0, row = 0, column = 0) {
    if (wordFound) return;
    if (
      row < 0 ||
      column < 0 ||
      row >= board.length ||
      column >= board[0].length
    )
      return;
    const letter = board[row][column];

    if (letter !== word[index]) return;
    if (lettersUsed.has(`${row},${column}`)) return;
    if (index == word.length - 1) {
      wordFound = true;
      return;
    }
    lettersUsed.add(`${row},${column}`);
    generateWordsSet(index + 1, row, column + 1);
    generateWordsSet(index + 1, row, column - 1);
    generateWordsSet(index + 1, row - 1, column);
    generateWordsSet(index + 1, row + 1, column);
    lettersUsed.delete(`${row},${column}`);
  }

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[0].length; column++) {
      lettersUsed = new Set();
      generateWordsSet(0, row, column);
      if (wordFound == true) {
        return true;
      }
    }
  }
  return wordFound;
};
