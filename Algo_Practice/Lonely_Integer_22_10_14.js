// from hackerrank.com

function lonelyinteger(a) {
	const unmatched = new Map()
	for(const element of a){
			if(unmatched.has(element)) unmatched.delete(element)
			else unmatched.set(element, true)
	}
	const [lonelyInteger] = unmatched.keys()
	return lonelyInteger;
}