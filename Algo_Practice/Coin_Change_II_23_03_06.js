// https://leetcode.com/problems/coin-change-ii/

// Runtime:  1153 ms (beats 14.13%)
// Memory:  64.5 MB (beats 41.87%)
// Strategy:  Memoized depth-first-search, avoiding duplicates by only recursively calling the function with coins of equal or greater value that the current coin
var change = function(amount, coins) {
	const seen = new Map()
	return dfs(0,0)

	function dfs(runningSum, coinIndex){
			if(runningSum > amount) return 0
			if(runningSum === amount) return 1
			const key = `${runningSum},${coinIndex}`
			if(seen.has(key)) return seen.get(key)
			let currentValue = 0
			for(let j = coinIndex; j < coins.length; j++){
					const coin = coins[j]
					currentValue += dfs(runningSum + coin, j)
			}
			seen.set(key, currentValue)
			return seen.get(key)
	}
};


// Comment:  works, but times out
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var changeBruteForce = function(amount, coins) {
	let count = 0
	coins.sort((a,b) => b - a)
	bruteForce(0,0)

	function bruteForce(runningSum, coinIndex){
			if(runningSum > amount) return
			if(runningSum === amount) count++
			for(let j = coinIndex; j < coins.length; j++){  // to eliminate duplicates, only allow coins at or to the right of the current coin in the coins list
					const coin = coins[j]
					bruteForce(runningSum + coin, j)
			}
	}
	return count
};


console.log(change(5, [5,2,1]))