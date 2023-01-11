/**
 * @param {character[][]} grid
 * @return {number}
 */
// Runtime:  93 ms (beats 76.56%)
// Memory Usage:  44.9 MB (beats 71.95%)
// Comment:  mutates grid by marking visited land as water

var numIslandsMutates = function (grid) {
  let islandCount = 0;
  //const visited = [...Array(grid.length).fill(Array(grid[0].length).fill(false))]  got weird glitches with this

  let visited = [];
  for (let row = 0; row < grid.length; row++) {
    const row = [];
    for (let column = 0; column < grid[0].length; column++) {
      row.push(false);
    }
    visited.push(row);
  }
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (!visited[row][column] && grid[row][column] == 1) {
        islandCount++;
        exploreIsland(row, column);
      }
    }
  }

  function exploreIsland(row, column) {
    if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length)
      return; //check to see if it is out of bounds
    if (visited[row][column] == true) return; //already explored
    if (grid[row][column] == 0) return; //only continue exploring if it is land

    visited[row][column] = true;
    exploreIsland(row - 1, column);
    exploreIsland(row + 1, column);
    exploreIsland(row, column + 1);
    exploreIsland(row, column - 1);
  }

  return islandCount;
};

// Runtime:  83 ms (beats 89.68%)
// Memory Usage:  52.8 MB (beats 42.66%)
// Comment:  created visited table to avoid mutating the original array

var numIslands = function (grid) {
  let islandCount = 0;
	const row = Array(grid[0].length).fill(false)
  const visited = [...Array(grid.length).fill([
    ...row
  ])]; // got weird glitches with this

  // let visited = [];
  // for (let row = 0; row < grid.length; row++) {
  //   const row = [];
  //   for (let column = 0; column < grid[0].length; column++) {
  //     row.push(false);
  //   }
  //   visited.push(row);
  // }
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (!visited[row][column] && grid[row][column] == 1) {
        islandCount++;
        exploreIsland(row, column);
      }
    }
  }

  function exploreIsland(row, column) {
    if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length)
      return; //check to see if it is out of bounds
    if (visited[row][column] == true) return; //already explored
    if (grid[row][column] == 0) return; //only continue exploring if it is land

    visited[row][column] = true;
    exploreIsland(row - 1, column);
    exploreIsland(row + 1, column);
    exploreIsland(row, column + 1);
    exploreIsland(row, column - 1);
  }

  return islandCount;
};

// Runtime:  151 ms (beats 30.76%)
// Memory:  55.6 MB (beats 16.42%)
// Comment:  surprisingly poor performance for set

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsSet = function (grid) {
  let islandCount = 0;
  let visited = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      const string = `${row},${column}`;
      if (!visited.has(string) && grid[row][column] == 1) {
        islandCount++;
        exploreIsland(row, column);
      }
    }
  }

  function exploreIsland(row, column) {
    if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length)
      return; //check to see if it is out of bounds
    const string = `${row},${column}`;
    if (visited.has(string)) return; //already explored
    if (grid[row][column] == 0) return; //only continue exploring if it is land
    visited.add(string);
    exploreIsland(row + 1, column);
    exploreIsland(row - 1, column);
    exploreIsland(row, column + 1);
    exploreIsland(row, column - 1);
  }
  return islandCount;
};

const grid1 = [["0","1","0"],["1","0","1"],["0","1","0"]]
numIslands(grid1)