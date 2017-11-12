
function getNewLimit() { // Get the new inputed number
	var newLimit = document.getElementById("js-maxNumInput").value;
	return newLimit; 
}

function updateDisplay(sum) { // Update the sum displayed to user
	document.getElementById("js-numDisplay").innerHTML = "The new sum is " + sum;
}

function sumOfMultiples() { // Calc sum of all multiples, taking max number as input. Returns a number.
	var limit = getNewLimit();
	var sum = 0;					

	for (var i = 3; i < limit; i++) {
		if ( checkIfMultiple(i) ) { sum += i; }
	} updateDisplay(sum);
}

function checkIfMultiple(num) { // Checks if a number is a multiple of 3 or 5, returns a number.
	if (num % 3 === 0 || num % 5 === 0) {
		return num;
	} else {
	return false;
	}
}

function resetPage() { // Clears state
	document.getElementById("js-numDisplay").innerHTML = "";
	var input = document.getElementById("js-maxNumInput").value = "";
	input.placeholder = "How bout another?";
}
