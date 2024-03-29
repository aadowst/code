/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */

// Pseudocode
// select a pivot
// switching the pivot and the last value
//set up 2 pointers
// move the left pointer until it is at a value > pivot value
// move the right pointer until it is at a value < pivot value
// swap the values at the left and right pointers
// continue moving left then right pointers until they are at the same spot
// swap the pivot value with where the pointers stopped
function partition(nums = [], left = 0, right = nums.length - 1) {
    const pivot = Math.floor(nums.length/2);
    const temp = nums[pivot];
    nums[pivot] = nums[right];
    nums[right] = temp;

    right--;
    while(left < right){
        while(nums[left] < temp){
            left++;
        }
        while(nums[right] > temp){
            right--;
        }
        const temp2 = nums[left];
        nums[left] = nums[right];
        nums[right] = temp2;
        left++;
        right--;
    }
    //the value at nums[right] could be equal or the same as the pivot value, but nums[right+1] must be larger than pivot value, so that's what gets swapped
    nums[nums.length-1] = nums[right+1];
    nums[right+1] = temp;

    return right;
}

// console.log(nums2);
partition(nums2);

module.exports = {
    partition: partition
};