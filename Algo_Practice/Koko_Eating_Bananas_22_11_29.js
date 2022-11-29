// from:https://leetcode.com/problems/koko-eating-bananas
// Comment:  slower than function below (due to Math.min and Math.max??)
// Runtime: 129 ms, faster than 50.57% of JavaScript online submissions for Koko Eating Bananas.
// Memory Usage: 45.9 MB, less than 16.60% of JavaScript online submissions for Koko Eating Bananas.
var minEatingSpeed = function (piles, h) {
  const loops = Math.floor(h / piles.length);
	let minPile = Infinity
	let maxPile = 0
	for(let pile of piles){
		minPile = Math.min(minPile, pile)
		maxPile = Math.max(maxPile, pile)
	}
  let bananasPerHourCeiling = Math.ceil(maxPile / loops);
  let bananasPerHourFloor = Math.max(1, Math.floor(minPile/loops))
	let bananasPerHourMid = Math.floor((bananasPerHourCeiling+bananasPerHourFloor)/2)
  let hoursRemaining = h - calculateHoursKokoEats(bananasPerHourMid);
  while (bananasPerHourCeiling >= bananasPerHourFloor) {
		if(hoursRemaining < 0){
			bananasPerHourFloor = bananasPerHourMid + 1
		}else{
			bananasPerHourCeiling = bananasPerHourMid - 1
		}
		bananasPerHourMid = Math.floor((bananasPerHourCeiling+bananasPerHourFloor)/2)
    hoursRemaining = h - calculateHoursKokoEats(bananasPerHourMid);
  }

  return bananasPerHourFloor;

  function calculateHoursKokoEats(bananasPerHour) {
    let hoursKokoEats = 0;
    for (let i = 0; i < piles.length; i++) {
      const hoursPerPile = Math.ceil(piles[i] / bananasPerHour);
      hoursKokoEats += hoursPerPile;
      if (hoursKokoEats > h) return hoursKokoEats;
    }
    return hoursKokoEats;
  }
};

// Comment:  binary search between the max value (size of largest pile) and min value
// Runtime: 101 ms, faster than 82.25% of JavaScript online submissions for Koko Eating Bananas.
// Memory Usage: 44.8 MB, less than 90.93% of JavaScript online submissions for Koko Eating Bananas.
/* @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeedWithSort = function (piles, h) {
  const sortedPiles = piles.sort((a, b) => b - a);
  const loops = Math.floor(h / piles.length);
  let bananasPerHourCeiling = Math.ceil(sortedPiles[0] / loops);
  let bananasPerHourFloor;
  if (loops === 1) {
    const minNumberIndex = h - sortedPiles.length;
    bananasPerHourFloor = sortedPiles[minNumberIndex];
  } else {
    bananasPerHourFloor = Math.max(
      1,
      Math.floor(sortedPiles[sortedPiles.length - 1] / loops)
    );
  }
	let bananasPerHourMid = Math.floor((bananasPerHourCeiling+bananasPerHourFloor)/2)
  let hoursRemaining = h - calculateHoursKokoEats(bananasPerHourMid);
  while (bananasPerHourCeiling >= bananasPerHourFloor) {
		if(hoursRemaining < 0){
			bananasPerHourFloor = bananasPerHourMid + 1
		}else{
			bananasPerHourCeiling = bananasPerHourMid - 1
		}
		bananasPerHourMid = Math.floor((bananasPerHourCeiling+bananasPerHourFloor)/2)
    hoursRemaining = h - calculateHoursKokoEats(bananasPerHourMid);
  }

  return bananasPerHourFloor;

  function calculateHoursKokoEats(bananasPerHour) {
    let hoursKokoEats = 0;
    for (let i = 0; i < sortedPiles.length; i++) {
      const hoursPerPile = Math.ceil(sortedPiles[i] / bananasPerHour);
      hoursKokoEats += hoursPerPile;
      if (hoursKokoEats > h) return hoursKokoEats;
    }
    return hoursKokoEats;
  }
};

// Comment:  Pretty brute-force, but good place to start
// Runtime: 4200 ms, faster than 5.11% of JavaScript online submissions for Koko Eating Bananas.
// Memory Usage: 45.2 MB, less than 56.19% of JavaScript online submissions for Koko Eating Bananas.
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeedBruteForce = function (piles, h) {
  const sortedPiles = piles.sort((a, b) => b - a);
  const loops = Math.floor(h / piles.length);
  let bananasPerHourFloor;
  if (loops === 1) {
    const minNumberIndex = h - sortedPiles.length;
    bananasPerHourFloor = sortedPiles[minNumberIndex];
  } else {
    bananasPerHourFloor = Math.max(
      1,
      Math.floor(sortedPiles[sortedPiles.length - 1] / loops)
    );
  }
  let hoursRemaining = h - calculateHoursKokoEats(bananasPerHourFloor);
  if (hoursRemaining === 0) return bananasPerHourFloor;
  while (hoursRemaining < 0) {
    bananasPerHourFloor++;
    hoursRemaining = h - calculateHoursKokoEats(bananasPerHourFloor);
  }
  return bananasPerHourFloor;

  function calculateHoursKokoEats(bananasPerHour) {
    let hoursKokoEats = 0;
    for (let i = 0; i < sortedPiles.length; i++) {
      const hoursPerPile = Math.ceil(sortedPiles[i] / bananasPerHour);
      hoursKokoEats += hoursPerPile;
      if (hoursKokoEats > h) return hoursKokoEats;
    }
    return hoursKokoEats;
  }
};
console.log(minEatingSpeed(
	[30,11,23,4,20],
	6));
