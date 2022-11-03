// comment:  in actuality, leetcode's input is a number. so leading zeros are dropped.
// Runtime:  162 ms (faster than 5.39%)
// Memory Usage:  44.9 MB (less than 6.26%)
var reverseBits = function(n) {
	n = n.toString(2)
	const length = n.length
	// this restores the leading zeros until the string is 32 characters long, as required
	for(let i = length; i < 32; i++){
			n = '0' + n
	}
	let reverseString = ""
	
for (let i = 31; i >= 0; i--) {
	reverseString = reverseString + n[i];
}
return parseInt(reverseString, 2)
};

// Comment:  this code works here in vscode when given an a string as an input (as specified in the problem), but isn't actually accepted by leetcode
var reverseBits = function (n) {
	let reverseString = ""
  for (let i = 31; i >= 0; i--) {
    reverseString = reverseString + n[i];
  }
	console.log(reverseString)
  return parseInt(reverseString, 2)
};





console.log(reverseBitsAgain(00000010100101000001111010011100));