// Dynamic Programming Practice

// Imagine you are standing in the upper left corner of a grid that is n rows by m columns. If you can only move down or to the right, how many paths are there to the lower left?

// Time complexity: O(2^n+m)
// Space complexity: O(n+m)
let gridWalk = (n,m) => {
	if(n === 0 || m === 0) return 0
	if(n === 1 && m === 1) return 1
	return gridWalk(n - 1, m) + gridWalk(n, m - 1);
}


// Time complexity: O(n+m)
// Space complexity: O(n+m)
let gridWalkMemoized = (n, m, memo = {}) => {
	if(n === 0 || m === 0) return 0
	if(n === 1 && m === 1) return 1
	const key = n + "," + m
	if(key in memo) return memo[key]
	memo[key] = gridWalk(n - 1, m, memo) + gridWalk(n, m - 1, memo);
	return memo[key]
}

let gridWalkDoubleMemoized = (n, m, memo = {}) => {
	if(n === 0 || m === 0) return 0
	if(n === 1 && m === 1) return 1
	const key1 = n + "," + m
	const key2 = m + "," + n
	if(key1 in memo) return memo[key1]
	else if(key2 in memo) return memo[key2]
	else{
		memo[key1] = gridWalk(n - 1, m, memo) + gridWalk(n, m - 1, memo);
		memo[key2] = memo[key1]
		return memo[key1]
	}
}

console.log(gridWalkMemoized(14,6))
console.log(gridWalkMemoized(8,3))