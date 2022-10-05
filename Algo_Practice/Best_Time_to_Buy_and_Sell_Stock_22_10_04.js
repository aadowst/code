// From https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


// Runtime: 95 ms(faster than 88.02%)
// Memory Usage: 51.5 MB (less than 84.48%)
var maxProfit = function(prices) {
	let lowestSeen = prices[0];
	let localMax = prices[0];
	let profit = 0;
	for(let i = 1; i < prices.length; i++){
		if(prices[i]< lowestSeen){
			const difference = localMax - lowestSeen
			if(difference > profit) profit = difference
			lowestSeen = prices[i]
			localMax = prices[i]
		} else if(prices[i]> localMax) {
			localMax = prices[i]
			const difference = localMax - lowestSeen
			if(difference > profit) profit = difference
		} else continue
	}
	return profit
}

const prices = [681,331,387,940,850,305,433,389,137,57,294]
console.log(maxProfit(prices))


// Runtime: exceeded time limit!
// Memory Usage: NA 
var maxProfitBruteForce = function(prices) {
		let profit = 0
		for(let i = 0; i < prices.length; i++){
			for(let j = i + 1; j < prices.length; j++){
				if( prices[j]- prices[i] > profit) profit = prices[j] - prices[i]
			}
		}
		return profit
}
