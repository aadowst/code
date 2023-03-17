// https://leetcode.com/problems/hand-of-straights/

// Runtime:  100 ms(beats 97.52%)
// Memory:  46.9 MB (beats 90.6%)
// Comment:  switched from a Set to an array to keep track of seen values. Slightly slower, but better memory
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
	if(hand.length % groupSize != 0) return false
	hand.sort((a,b) => a - b)
	const seen = Array(hand.length).fill(false)
	let startingIndex = 0
	let startingValue
	let handCount = 0
	let totalCount = 0
	let nextIndex = startingIndex + groupSize
	while(totalCount < hand.length){
			for(let i = startingIndex; i < hand.length; i++){
					if(handCount === 0) startingValue = hand[i]
					if(seen[i]) continue
					if(hand[i] === startingValue + handCount){
							seen[i] = true
							handCount++
							totalCount++
					} 
					else nextIndex = Math.min(nextIndex, i)
					if(handCount === groupSize){
							break;
					}
					
			}
			if(handCount != groupSize) return false
			handCount = 0
			startingIndex = nextIndex
			nextIndex = startingIndex + groupSize
	} 
	return true
};

// Runtime:  94 ms (beats 99.38%)
// Memory:  49.4 MB (beats 66.46%)
// Strategy:  sort array and keep track of values that have been used. start each iteration at the first unseen index
var isNStraightHand = function(hand, groupSize) {
	if(hand.length % groupSize != 0) return false
	hand.sort((a,b) => a - b)
	const seen = new Set()
	let startingIndex = 0
	let startingValue
	let count = 0
	let nextIndex = startingIndex + groupSize
	while(seen.size < hand.length){
			for(let i = startingIndex; i < hand.length; i++){
					if(count === 0) startingValue = hand[i]
					if(seen.has(i)) continue
					if(hand[i] === startingValue + count){
							seen.add(i)
							count++
					} 
					else nextIndex = Math.min(nextIndex, i)
					if(count === groupSize){
							break;
					}
					
			}
			if(count != groupSize) return false
			count = 0
			startingIndex = nextIndex
			nextIndex = startingIndex + groupSize
	} 
	return true
};

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3))