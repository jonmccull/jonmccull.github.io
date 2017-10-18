//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
//


function sumOfMultiples(limit) { // Calc sum of all multiples, taking max number as input. Returns a number.
	var sum = 0;					

	for (var i = 3; i <= limit; i++) {
		if (checkIfMultiple(i)) {
			sum += i;
		} ;
	}

	return sum;
}

function checkIfMultiple(num) { // Checks if a number is a multiple of 3 or 5, returns a number.
	if (num % 3 === 0 || num % 5 === 0) {
		return num;
	}
}