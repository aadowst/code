// from:  https://leetcode.com/problems/car-fleet/
// Runtime: 463 ms, faster than 56.58% of JavaScript online submissions for Car Fleet.
// Memory Usage: 73.2 MB, less than 62.37% of JavaScript online submissions for Car Fleet.
var carFleet = function (target, position, speed) {
  let count = 0;
  let enroute = [];
  for (let i = 0; i < position.length; i++) {
    enroute.push([position[i], speed[i]]);
  }
  enroute.sort((a, b) => a[0] - b[0]);

  while (enroute.length > 1) {
    let car1 = enroute.pop();
    let car2 = enroute.pop();
    const car1Time = calculateTime(target, car1);
    let car2Time = calculateTime(target, car2);
    while (car1Time >= car2Time) {
			if(enroute.length === 0) return count+1
      car2 = enroute.pop();
      car2Time = calculateTime(target, car2);
    }
    enroute.push(car2);
    count++;
  }
  count++;

  return count;
};

function calculateTime(target, carData) {
  return (target - carData[0]) / carData[1];
}

console.log(carFleet(100, [1,2,4], [4,2,1]))
