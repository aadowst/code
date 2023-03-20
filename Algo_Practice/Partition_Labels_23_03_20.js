// https://leetcode.com/problems/partition-labels/

// Strategy:  greedy. uses two pointers and a hashmap
// Runtime:  66 ms (beats 82.78%)
// Memory:  42.5 MB (beats 92.69%)
// Comment:  eliminated the set contiaining the letters in each partition

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
	let partitionSizes = []
	const letterLastIndex = new Map();
	for(let i = 0; i < s.length; i++){
			const letter = s[i]
			letterLastIndex.set(letter, i)
	}

	let pointer = 0
	let partitionCount = 0
	let endOfPartition = 0;
	while(pointer < s.length){
			partitionCount++
			const letter = s[pointer]
			endOfPartition = Math.max(endOfPartition, letterLastIndex.get(letter))

			if(pointer == endOfPartition){
					partitionSizes.push(partitionCount)
					partitionCount = 0
			} 
			pointer++
	}
	return partitionSizes
};

// Runtime:  71 ms (beats 64.39%)
// Memory:  44.1 MB (beats 51.42%)
// Comment:  only stores last index of a letter

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
	let partitionSizes = []
	const letterIndexes = new Map();
	for(let i = 0; i < s.length; i++){
			const letter = s[i]
			letterIndexes.set(letter, i)
	}

	let pointer = 0
	let partitionCount = 0
	let lettersInPartition = new Set()
	let target = 0;
	while(pointer < s.length){
			partitionCount++
			const letter = s[pointer]
			if(!lettersInPartition.has(letter)){
							lettersInPartition.add(letter)
							target = Math.max(target, letterIndexes.get(letter))
					}
			if(pointer == target){
					partitionSizes.push(partitionCount)
					lettersInPartition = new Set()
					partitionCount = 0
			} 
			pointer++
	}
	if(partitionCount > 0) partitionSizes.push(partitionCount)
	return partitionSizes
};

// Runtime:  235 ms (beats 5.19%)
// Memory:  50.4 MB (beats 5.19%)
// Comment: first attempt

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
	let partitionSizes = []
	const letterIndexes = new Map();
	for(let i = 0; i < s.length; i++){
			const letter = s[i]
			if(letterIndexes.has(letter)){
					const array = letterIndexes.get(letter)
					array.push(i)
			}
			else letterIndexes.set(letter, [i])
	}

	let pointer = 0
	let partitionCount = 0
	let lettersInPartition = new Set()
	let target = 0;
	while(pointer < s.length){
			partitionCount++
			const letter = s[pointer]
			if(!lettersInPartition.has(letter)){
							lettersInPartition.add(letter)
							target = Math.max(target, ...letterIndexes.get(letter))
					}
			console.log(pointer, letter, target)
			if(pointer == target){
					partitionSizes.push(partitionCount)
					lettersInPartition = new Set()
					partitionCount = 0
			} 
			pointer++
	}
	if(partitionCount > 0) partitionSizes.push(partitionCount)
	return partitionSizes
};