// https://leetcode.com/problems/rotting-oranges/

// Runtime:  88 ms (beats 63.27%)
// Memory:  44.6 MB (beats 68.16%)
// Comment:  eliminated the array that stored time to reach each fresh orange
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let minutesElapsed = 0;
  const maxRow = grid.length - 1;
  const maxColumn = grid[0].length - 1;
  let seenThisSearch = new Set();

  let freshOranges = new Set();
  let queue = [];

  function bfs() {
    while (queue.length > 0) {
      let nextRound = [];
      while (queue.length > 0) {
        const [row, column, minutes] = queue.shift();
        if (checkCell(row, column, minutes)) {
          seenThisSearch.add(`${row},${column}`);

          nextRound.push([row + 1, column, minutes + 1]);
          nextRound.push([row - 1, column, minutes + 1]);
          nextRound.push([row, column + 1, minutes + 1]);
          nextRound.push([row, column - 1, minutes + 1]);
        }
      }
      if (nextRound.length > 0) minutesElapsed++;
      queue = nextRound;
    }

    minutesElapsed--; // corrects the incrementation from the last round, which didn't have any valid cells

    function checkCell(row, column, minutes) {
      if (row < 0 || row > maxRow || column < 0 || column > maxColumn)
        return false;
      if (grid[row][column] == 0) return false;
      if (grid[row][column] == 2 && minutes > 0) return false;
      if (seenThisSearch.has(`${row},${column}`)) return false;
      return true;
    }
  }

  for (let row = 0; row <= maxRow; row++) {
    for (let column = 0; column <= maxColumn; column++) {
      if (grid[row][column] == 2) {
        queue.push([row, column, 0]);
      }
      if (grid[row][column] == 1) freshOranges.add(`${row},${column}`);
    }
  }
  if (freshOranges.size == 0) return 0; // early exit if there were no fresh oranges
  bfs();

  const keys = freshOranges.keys();
  for (const key of keys) {
    if (!seenThisSearch.has(key)) return -1; // return -1 if there was an orange that couldn't be reached
  }

  return minutesElapsed;
};

// Runtime:  84 ms (beats 69.47%)
// Memory:  46.8 MB (beats 14.78%)
// Strategy: breadth first search, starting anew from each rotten orange

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRottingOriginal = function (grid) {
  let minutesElapsed = 0;
  const maxRow = grid.length - 1;
  const maxColumn = grid[0].length - 1;
  let seenThisSearch;
  const visited = []; // stores the time it takes for each fresh orange to rot
  for (let i = 0; i <= maxRow; i++) {
    const row = [];
    for (let j = 0; j <= maxColumn; j++) {
      row.push(Number.POSITIVE_INFINITY);
    }
    visited.push(row);
  }
  freshOranges = new Set(); // store the location of all fresh oranges in the set, to ensure all are reachable
  const queue = [];

  function bfs() {
    while (queue.length > 0) {
      const [row, column, minutes] = queue.shift();
      if (checkCell(row, column, minutes)) {
        seenThisSearch.add(`${row},${column}`);
        visited[row][column] = Math.min(visited[row][column], minutes);

        queue.push([row + 1, column, minutes + 1]);
        queue.push([row - 1, column, minutes + 1]);
        queue.push([row, column + 1, minutes + 1]);
        queue.push([row, column - 1, minutes + 1]);
      }
    }

    function checkCell(row, column, minutes) {
      if (row < 0 || row > maxRow || column < 0 || column > maxColumn)
        return false;
      if (grid[row][column] == 0) return false;
      if (grid[row][column] == 2 && minutes > 0) return false;
      if (seenThisSearch.has(`${row},${column}`)) return false;

      return true;
    }
  }

  for (let row = 0; row <= maxRow; row++) {
    for (let column = 0; column <= maxColumn; column++) {
      if (grid[row][column] == 2) {
        seenThisSearch = new Set();
        queue.push([row, column, 0]);
        bfs();
      }
      if (grid[row][column] == 1) freshOranges.add(`${row},${column}`);
    }
  }

  const keys = freshOranges.keys();
  for (const key of keys) {
    const [row, column] = key.split(",");
    if (visited[row][column] == Number.POSITIVE_INFINITY) return -1;
    minutesElapsed = Math.max(minutesElapsed, visited[row][column]);
  }

  return minutesElapsed;
};
