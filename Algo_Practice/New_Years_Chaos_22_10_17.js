// from hackerrank.com

// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

function minimumBribes(q) {
	let bribes = 0;

	// start at the back of the q
	for (let i = q.length - 1; i >= 0; i--) {
		// person is the number of the person who should be there
		let person = i + 1;
		// each person can only bribe 2 others, so the closest they should be is 2 spots ahead of their starting place
		if(q[i] > person + 2 ){
			console.log("Too chaotic")
			return "Too chaotic"
		}
		// move the person back to their proper spot
		for (let j = i-2; j < i; j++) {
			if (q[j] == person) {
					const temp = q[j + 1]
					q[j + 1] = q[j]
					q[j] = temp
					bribes++
			}
		}
	}

	console.log(bribes)
	return bribes
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])