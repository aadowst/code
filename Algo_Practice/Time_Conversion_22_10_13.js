// from hackerrank.com

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
	let hour = parseInt(s.slice(0, 2));
	const minAndSec = s.slice(2,8)
	const isPM = s.slice(8,) === "PM"

	if(hour == 12){
			if (isPM) hour = "12"
			else hour = "00"
	}
	else if(isPM) hour += 12
	else{
			if(hour < 10) hour = "0" + hour
	}
	
	return hour + minAndSec
}