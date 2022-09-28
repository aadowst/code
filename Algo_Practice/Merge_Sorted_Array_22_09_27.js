const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

// Expected Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//original solution

var merge = function(nums1, m, nums2, n) {
	let nCount = n;
	let mCount = m;
	while(nCount > 0  && mCount > 0){
			if(nums1[mCount - 1] >= nums2[nCount - 1]){
					nums1[nCount + mCount - 1] = nums1[mCount - 1]
					mCount--
			}else {
					nums1[nCount + mCount - 1] = nums2[nCount -1]
					nCount--
			}
	}
	while(nCount > 0){
			nums1[nCount - 1] = nums2[nCount - 1]
			nCount--
	}
};

// Solution with splicing

var mergeSplice = function(nums1, m, nums2, n) {
	// j is keeps track of how many values from nums2 are spliced into nums1 (and also serves as a pointer for nums2)
	let j = 0
	for (let i = 0; i < m + n; i++) {
		// if the value in nums2 is less than or equal to nums1, splice it in and increment j
			if (nums2[j] <= nums1[i]) {
					nums1.splice(i, 0, nums2[j])
					j++
			}
	}
	

	// check to see if all values from nums2 have been spliced in. if not, add them and increment j until done
	while (j < n) {
			nums1.splice(m + j, 0, nums2[j])
			j++
	}
	
	// remove the zeros, the count of which is the same as the number of numbers spliced from nums2, from the end of nums1
	nums1.splice(m + n, n)
	return nums1
};

console.log(mergeSplice(nums1, m, nums2, n))
