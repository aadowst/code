
/*
from:  https://leetcode.com/problems/top-k-frequent-elements/
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

// Comment:  cleaner looking with object syntax, but slower than Map, which was slower than my original solution. Oh dear!
// Runtime:  149 ms (29.51%)
// Memory Usage:  45 MB (75.28%)
var topKFrequentObjectSortedKeys = function(nums, k) {
	let numsSeen = {}
	for(let num of nums){
			numsSeen[num] = (numsSeen[num] + 1) || 1
	}
const sortedKeys = Object.keys(numsSeen).sort((a,b) => numsSeen[b] - numsSeen[a])
return sortedKeys.slice(0,k)
};

// Comment:  more sophisticated but slower!
// Runtime:  125 ms (62.36%)
// Memory Usage:  44.6 MB (86.49%)
var topKFrequentMapSortedKeys = function(nums, k) {
	let numsSeen = new Map()
	for(let num of nums){
			if(numsSeen.has(num)) numsSeen.set(num, numsSeen.get(num)+1)
			else numsSeen.set(num, 1)
	}
const sortedKeys = Array.from(numsSeen.keys()).sort((a,b)=> numsSeen.get(b)-numsSeen.get(a))
return sortedKeys.slice(0,k)
};

console.log(topKFrequentObjectSortedKeys([1,1,1,2,2,3,3,3,3], 2))

// Comment:  seems inelegant, but performaned well!
// Runtime:  118 ms (70.34%)
// Memory Usage:  44.7 MB (86.49%)
var topKFrequent = function(nums, k) {
	let numsSeen = new Map()
	for(let num of nums){
			if(numsSeen.has(num)) numsSeen.set(num, numsSeen.get(num)+1)
			else numsSeen.set(num, 1)
	}
const countArray = Array.from(numsSeen.values())
countArray.sort((a,b) => b-a)
const topKArray = countArray.slice(0, k)
const outputArray = []
for (let [key, val] of numsSeen){
	for(let i = 0; i < topKArray.length; i++){
	if(val == topKArray[i]) outputArray.push(key)
	break;
	}
}
return outputArray
};

// console.log(topKFrequent([1,2], 2))