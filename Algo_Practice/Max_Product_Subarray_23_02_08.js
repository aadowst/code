// https://leetcode.com/problems/maximum-product-subarray/

// Runtime:  86 ms (beats 28.9%)
// Memory:  44.2 MB (beats 27.68%)
// Strategy:  create subarrays of consecutive, non-zero values. if adjacent values are positive, condense them into their product, but do not alter negative values. When the end of subarray is reached, consult the number of negative values. If it is even, then negatives cancels, so find product of all values. If it is odd, then at least one of the first two values is negative and at least one of the last two values is negative. Thus, subarrays with even number of negatives might be created by removing from the subarray:  the first digit, the first two values, the last two values and/or the last value. The sizes of these subarrays can then be compared. There are edge cases in which one of the removed values is the largest, so these should be compared to the products of the new subarray
var maxProduct = function (nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  let largestProduct = 0;
  let condensed = [];
  let numNegatives = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      condensed.push(nums[i]);
      numNegatives++;
    } else if (nums[i] == 0) {
      determineLocalMax();  // call function at end of current subarray
      condensed = [];
      numNegatives = 0;
    } else {
      condenseOrPush(i);
    }
  }

  determineLocalMax();  // call function at end of for loop

  function condenseOrPush(i) {
    let currentVal = nums[i];
    if (condensed.length == 0) {
      condensed.push(currentVal);
      return;
    }
    let previous = condensed.pop();
    if (previous / currentVal < 0) {  // if the two values have opposite signs, they should be adjacent to each other
      condensed.push(previous);
      condensed.push(currentVal);
    } else {
      condensed.push(previous * currentVal);  // combine positive numbers
    }
  }

  function determineLocalMax() {
		if (condensed.length <=1 || numNegatives == 1) {  // the local max is a single value
			largestProduct = Math.max(largestProduct, ...condensed);
			return;
		}

    if (numNegatives % 2 == 0) {  // negatives cancel, so find sum of whole sub array
      localMax = condensed.reduce((previous, current) => previous * current);
      largestProduct = Math.max(largestProduct, localMax);
      return;
    }

    const productOfWholeSubarray = condensed.reduce(
      (previous, current) => previous * current
    );
    const firstValue = condensed[0];
    const secondValue = condensed[1];
    const secondToLastValue = condensed[condensed.length - 2];
    const lastValue = condensed[condensed.length - 1];

    const allButFirst = productOfWholeSubarray / firstValue;
    const allButFirstTwo = productOfWholeSubarray / (firstValue * secondValue);
    const allButLastTwo = productOfWholeSubarray / (secondToLastValue * lastValue);
    const allButLast = productOfWholeSubarray / lastValue;

    largestProduct = Math.max(
      largestProduct,
      firstValue,
      secondValue,
      secondToLastValue,
      lastValue,
      allButFirst,
      allButFirstTwo,
      allButLastTwo,
      allButLast
    );
  }
  return largestProduct;
};

const nums1 = [2,3,-2,4]
console.log(maxProduct(nums1))
