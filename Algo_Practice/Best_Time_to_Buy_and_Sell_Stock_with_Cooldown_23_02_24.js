// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

// Runtime:  75 ms (beats 49.1%)
// Memory:  45.7 MB (beats 17.85%)
// Strategy:  memoized depth-first search

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	const cache = new Map()

	return dfs(0,false)
	
	function dfs(index, haveBought){
			if(index >= prices.length) return 0
			const key = `${index},${haveBought}`
			if(cache.has(key)) return cache.get(key)

			if(haveBought){
					const wait = dfs(index + 1, true)
					const sell = dfs(index + 2, false) + prices[index]
					cache.set(key, Math.max(wait, sell))
			}else{
					const buy = dfs(index + 1, true) - prices[index]
					const wait = dfs(index + 1, false)
					cache.set(key, Math.max(buy, wait))
			}
			return cache.get(key)
	}
};