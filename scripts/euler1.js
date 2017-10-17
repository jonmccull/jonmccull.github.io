//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
//


// Function to generate numbers in range and print them to console.

function numList (maxNum) {
	
	var counter = 0;

	while (counter >= maxNum) {
		console.log(counter);
		maxNum++;
	}

}

// Function to check if number is divisble by 3 or 5

function divisbleCheck (number) {

	if (number % 3) { } // divisible by 3, with no remainder

	if (number % 5) { } // divisible by 5, with no remainder

	if (number % 15) { } // divisible by 3 and 5, with no remainder

}