// From https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Comment this code is a lot cleaner than maxProfit (line 19), but performed worse
// Runtime: 141 ms(faster than 45.07%)
// Memory Usage: 52 MB (less than 15.54%)
var maxProfitRevised = function(prices){
	var lowestSeen = prices[0]
	var profit = 0;
	for(let i = 1; i < prices.length; i++){
		lowestSeen = Math.min(lowestSeen, prices[i])
		profit = Math.max(profit, prices[i]- lowestSeen)
	}
	return profit;
}


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
