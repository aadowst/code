// from:  https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

// Runtime: 67 ms, faster than 93.84% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
// Memory Usage: 43.1 MB, less than 46.22% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
var twoSumPointers = function(numbers, target){
	let leftPointer = 0;
	let rightPointer = numbers.length -1;
	while(true){
		if (numbers[rightPointer] + numbers[leftPointer] == target) return [leftPointer + 1, rightPointer + 1]
		else if(numbers[rightPointer] + numbers[leftPointer] < target) leftPointer++
		else rightPointer--
	}
}


// Runtime: 106 ms, faster than 45.15% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
// Memory Usage: 43 MB, less than 60.63% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
var twoSum = function (numbers, target) {
	let leftPointer = 0;
	let rightPointer = 1;
	while(numbers[rightPointer] + numbers[leftPointer] < target ){
			if(rightPointer - leftPointer > 1) leftPointer++
			else rightPointer++
	}
	while(true){
			if (numbers[rightPointer] + numbers[leftPointer] == target) return [leftPointer + 1, rightPointer + 1]
			else if(numbers[rightPointer] + numbers[leftPointer] < target) rightPointer++
			else leftPointer--
	}
	
};

twoSum(
	[12,13,23,28,43,44,59,60,61,68,70,86,88,92,124,125,136,168,173,173,180,199,212,221,227,230,277,282,306,314,316,321,325,328,336,337,363,365,368,370,370,371,375,384,387,394,400,404,414,422,422,427,430,435,457,493,506,527,531,538,541,546,568,583,585,587,650,652,677,691,730,737,740,751,755,764,778,783,785,789,794,803,809,815,847,858,863,863,874,887,896,916,920,926,927,930,933,957,981,997]
,542);
