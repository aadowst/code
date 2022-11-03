// from:  https://leetcode.com/problems/group-anagrams/

// Comment:  other cool solutions are:
// 1) https://leetcode.com/problems/group-anagrams/discuss/2751157/Javascript-solution-or-Easy-solution-or-Better-than-94
// 2) https://leetcode.com/problems/group-anagrams/discuss/718955/Three-JS-Solutions  (especially last solution)

// Comment:  sorting each word before checking if it's been seen is way better!
// Runtime:  199 ms (faster than 72.59%)
// Memory Usage: 53.7 MS (less than 48.57%)

const groupAnagramsSortedKeys = strs => {
	if (strs.length === 1) return [strs]
	let wordMap = new Map()

	for (let word of strs) {
			let sortedWord = word.split('').sort().join('')
			if (!wordMap.has(sortedWord)){ 
					wordMap.set(sortedWord, [word])
			}else{
					wordMap.get(sortedWord).push(word)
			}
	}
	// this return works the same as [...wordMap.values()]. if spread or Array.from are not included, than a Map iterator object is returned
	return Array.from(wordMap.values())
};

console.log(groupAnagramsSortedKeys(["eat","tea","tan","ate","nat","bat"]))

// Comment:  oh man, got to start somewhere!
// Runtime:  1461 ms (faster than 5.02%)
// Memory Usage: 64.6 MS (less than 5.02%)
var groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];
  const output = [];
  const maps = [];
  for (str of strs) {
    let lettersInStr = new Map();
    for (letter of str) {
      if (lettersInStr.has(letter)) {
        lettersInStr.set(letter, lettersInStr.get(letter) + 1);
      } else {
        lettersInStr.set(letter, 1);
      }
    }
		let isAnnagram = false
    for (let i = 0; i < maps.length; i++) {
      if (compareMaps(lettersInStr, maps[i])) {
        output[i].push(str);
        isAnnagram = true
      }
    }
		if(!isAnnagram){

			output.push([str]);
			maps.push(lettersInStr);
		}
  }
  return output;
};


function compareMaps(map1, map2) {
	var testVal;
	if (map1.size !== map2.size) {
			return false;
	}
	for (var [key, val] of map1) {
			testVal = map2.get(key);
			// in cases of an undefined value, make sure the key
			// actually exists on the object so there are no false positives
			if (testVal !== val || (testVal === undefined && !map2.has(key))) {
					return false;
			}
	}
	return true;
}