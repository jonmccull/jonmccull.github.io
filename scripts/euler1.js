
window.onload = function() { // Set up event listener for the new limit input.
    document.getElementById("submitBtn").addEventListener("click", function() { 
    	sumOfMultiples();
    }, false);

    document.getElementById("resetBtn").addEventListener("click", function() { 
    	resetPage();
    }, false);
}

function getNewLimit() { // Get the new inputed number
	var newLimit = document.getElementById("maxNumInput").value;
	return newLimit; 
}

function updateDisplay(sum) { // Update the sum displayed to user
	document.getElementById("numDisplay").innerHTML = "The new sum is " + sum;
}

function sumOfMultiples() { // Calc sum of all multiples, taking max number as input. Returns a number.

	var limit = getNewLimit();
	var sum = 0;					

	for (var i = 3; i < limit; i++) {
		if (checkIfMultiple(i)) {
			sum += i;
		}
	}
	
	updateDisplay(sum);
}

function checkIfMultiple(num) { // Checks if a number is a multiple of 3 or 5, returns a number.
	if (num % 3 === 0 || num % 5 === 0) {
		return num;
	} else {
	return false;
	}
}

function resetPage() { // Clears state
	document.getElementById("numDisplay").innerHTML = "";
	document.getElementById("maxNumInput").placeholder = "How bout another?";
}
