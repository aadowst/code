// https://leetcode.com/problems/coin-change/

// Runtime:  86 ms (beats 99.31%)
// Memory: 46.5 MB (beats 67.59%)
// Strategy:  bottom-up dynamic programming

// todo:  work on memoized solution

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

function coinChange(coins, amount){
	const dpArray = new Array(amount + 1).fill(Infinity)
	dpArray[0] = 0
	coins.sort((a,b) => a - b)
	for(let i = 1; i <= amount; i++){
		determineMinCoins(i)
	}
	function determineMinCoins(i){
		for(let j = 0; j < coins.length; j++){
			const coin = coins[j]
			if(i - coin < 0) return  // early exit, since subsequent values of coin are even greater
			if(dpArray[i - coin] + 1 < dpArray[i]) dpArray[i] = dpArray[i - coin] + 1
		}
	}

	return dpArray[amount] == Infinity ? - 1 : dpArray[amount]
}
