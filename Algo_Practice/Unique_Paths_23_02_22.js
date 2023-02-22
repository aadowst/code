// https://leetcode.com/problems/unique-paths/

// Runtime:  54 ms (beats 97.5%)
// Memory:  43.1 MB (beats 21.55%)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
	const dp = Array(m).fill(1).map(() => Array(n).fill(0))
	dp[m-1][n-1] = 1
	for(let row = m -1; row >= 0; row--){
			for(let column = n-1; column >=0; column--){
					if(row == m-1 || column == n-1) dp[row][column] = 1
					else dp[row][column] = dp[row+1][column] + dp[row][column + 1]
			}
	}
	return dp[0][0]
};