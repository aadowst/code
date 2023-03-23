// https://leetcode.com/problems/insert-interval/

// Comment:  improved memory from the following solution, but readabilty is worse. Best performance still by third solution (insertOriginal)
// Runtime: 74 ms (beats 67.57%)
// Memory:  44 MB (beats 73.8%)

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertRevisedRefactored = function (intervals, newInterval) {
  const result = [];
  let mergeComplete = false;
  let [newStart, newEnd] = newInterval;

  for (const interval of intervals) {
    let [currStart, currEnd] = interval;
    if (currEnd < newStart) result.push(interval);  // current interval before new interval
    else if (currStart > newEnd) {  // current interval after new/merged interval
      if (!mergeComplete) { // push the new/merged interval, if not already done
        result.push([newStart, newEnd]);
        mergeComplete = true;
      }
      result.push(interval); // push current interval
    } else {  // merge current interval with newInterval
      newStart = Math.min(newStart, currStart);
      newEnd = Math.max(newEnd, currEnd);
    }
  }
  if (!mergeComplete) {  // add new/merged interval to the end, if not aready done
    result.push([newStart, newEnd]);
    mergeComplete = true;
  }
  return result;
};

// Comment: a lot cleaner code, but performance is worse than code below
// Runtime:  73 ms (beats 72.23%)
// Memory:  45 MB (beats 15.88%)

var insertRevised = function (intervals, newInterval) {
  const beforeNewInterval = [];
  const afterNewInterval = [];
  let [newStart, newEnd] = newInterval;

  for (const interval of intervals) {
    let [currStart, currEnd] = interval;
    if (currEnd < newStart) beforeNewInterval.push(interval);
    else if (currStart > newEnd) afterNewInterval.push(interval);
    else {
      newStart = Math.min(newStart, currStart);
      newEnd = Math.max(newEnd, currEnd);
    }
  }
  return [...beforeNewInterval, [newStart, newEnd], ...afterNewInterval];
};

// Runtime:  63 ms (beats 94.18%)
// Memory:  44.4 MB (beats 39.24%)

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertOriginal = function (intervals, newInterval) {
  const returnArray = [];
  let index = 0;
  while (
    index < intervals.length &&
    intervals[index][0] < newInterval[0] &&
    intervals[index][1] < newInterval[0]
  ) {
    returnArray.push(intervals[index]);
    index++;
  }

  // insert at end of intervals
  if (index === intervals.length) {
    returnArray.push(newInterval);
    return returnArray;
  }

  // insert in middle with merging not required
  if (
    intervals[index][0] > newInterval[0] &&
    intervals[index][0] > newInterval[1]
  ) {
    returnArray.push(newInterval);
    addRemainingIntervals(index);
    return returnArray;
  }

  // insert in middle with mergining
  let start = Math.min(newInterval[0], intervals[index][0]);
  let end = Math.max(newInterval[1], intervals[index][1]);
  index++;
  while (index < intervals.length && end > intervals[index][0]) {
    end = Math.max(end, intervals[index][1]);
    index++;
  }
  returnArray.push([start, end]);
  addRemainingIntervals(index);
  return returnArray;

  function addRemainingIntervals(index) {
    while (index < intervals.length) {
      returnArray.push(intervals[index]);
      index++;
    }
  }
};

console.log(insert([[1, 5]], [0, 3]));
