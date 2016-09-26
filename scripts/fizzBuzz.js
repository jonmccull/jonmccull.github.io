
var messageDisplayDefault = " ";

// Set up event listener for numChoice submit.

window.onload = function() {
    
    document.getElementById("submitBtn").addEventListener("click", function() { 
    	analyseResult()
    }, false);
}

// Get the number the user entered and run FizzBuzz analysis on it. Update the display w/ result.

function analyseResult() { 
	var numChoice = getNumChoice();
	var result = fizzBuzz(numChoice);
	updateDisplay(result);
}

// Get the number the user entered on the form.

function getNumChoice() {
	var numChoice = document.getElementById("numberEntry").value;
	return numChoice; 
}

// Update the message displayed on screen with the result. Then reset the form & display for a new entry.

function updateDisplay(result) {
	document.getElementById("messageDisplay").innerHTML = result;
	setDefaults();
}

// Determine if numChoice is Fizz, Buzz or FizzBuzz.

function fizzBuzz(numChoice) {
	    if ( numChoice == 0 ) { return numChoice }
	    else if ( numChoice % 15 == 0 ) { return "FizzBuzz" }
	    else if ( numChoice % 3 == 0) { return "Fizz" }
	    else if ( numChoice % 5 == 0 ) { return "Buzz" }
	    else { return numChoice }
}

// Empty the message display area and reset the form for a new entry.

function setDefaults() {
	setTimeout( function(){ 
		document.getElementById("messageDisplay").innerHTML = messageDisplayDefault;
		document.getElementById("numbEntry").reset();
	}, 2000 );	
}