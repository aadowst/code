// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Runtime:  202 ms (beats 56.81%)
// Memory:  60.9 MB (beats 13.39%)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue();
  for (const num of nums) {
    if (minHeap.size() < k) {
      minHeap.enqueue(num);
    } else if (minHeap.front().element < num) {
      minHeap.dequeue();
      minHeap.enqueue(num);
    }
  }
  return minHeap.front().element;
};

// Comment:  tried a solution w/o using the priority queue built-in, but performance was worse!!
// Runtime:  2929 ms (beats 5.1%)
// Memory:  53.2 MB (beats 22.36%)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const largestElements = [];
  for (const num of nums) {
    if (largestElements.length < k) {
      insertNumIntoArray(num);
    } else if (largestElements[k - 1] < num) { 
      largestElements.pop();
      insertNumIntoArray(num);
    }
  }

  function insertNumIntoArray(num) {
    let isAdded = false;
    for (let i = 0; i < largestElements.length; i++) {
      if (largestElements[i] < num) { 
        largestElements.splice(i, 0, num); // insert num into index i, deleting 0 elements and shifting the rest
        isAdded = true;
        break;
      }
    }
    if (!isAdded) largestElements.push(num); // num wasn't inserted into the array, so should be at end
  }

  return largestElements[k - 1];
};
