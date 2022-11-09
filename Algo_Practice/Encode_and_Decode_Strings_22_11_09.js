// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Machine 1 (sender) has the function:

// string encode(vector strs) {
//   // ... your code
//   return encoded_string;
// }
// Machine 2 (receiver) has the function:
// vector decode(string s) {
//   //... your code
//   return strs;
// }

const encode = function (str){
	let encodedStr = ""
	for(let i = 0; i < str.length; i++){
		let newCharCode = str.charCodeAt(i) + i + str.length
		while(newCharCode> 255) newCharCode -= 255;
		encodedStr += String.fromCharCode(newCharCode)
	}
	return encodedStr
}

console.log(encode("ASCII stands for American Standard Code for Information Interchange. Computers can only understand numbers, so an ASCII code is the numerical representation of a character such as 'a' or '@' or an action of some sort. ASCII was developed a long time ago and now the non-printing characters are rarely used for their original purpose. Below is the ASCII character table and this includes descriptions of the first 32 non-printing characters. ASCII was actually designed for use with teletypes and so the descriptions are somewhat obscure. If someone says they want your CV however in ASCII format, all this means is they want 'plain' text with no formatting such as tabs, bold or underscoring - the raw format that any computer can understand. This is usually so they can easily import the file into their own applications without issues. Notepad.exe creates ASCII text, or in MS Word you can save a file as 'text only' (from:  https://www.asciitable.com/)"))

const decode = function (encodedStr){
	let plainText = ""
	for(let i = 0; i < encodedStr.length; i++){
		let newCharCode = encodedStr.charCodeAt(i) - i - encodedStr.length
		while(newCharCode<0) newCharCode += 255;
		plainText += String.fromCharCode(newCharCode)
	}
	return plainText
}

console.log(decode(encode("ASCII stands for American Standard Code for Information Interchange. Computers can only understand numbers, so an ASCII code is the numerical representation of a character such as 'a' or '@' or an action of some sort. ASCII was developed a long time ago and now the non-printing characters are rarely used for their original purpose. Below is the ASCII character table and this includes descriptions of the first 32 non-printing characters. ASCII was actually designed for use with teletypes and so the descriptions are somewhat obscure. If someone says they want your CV however in ASCII format, all this means is they want 'plain' text with no formatting such as tabs, bold or underscoring - the raw format that any computer can understand. This is usually so they can easily import the file into their own applications without issues. Notepad.exe creates ASCII text, or in MS Word you can save a file as 'text only'(from:  https://www.asciitable.com/)")))