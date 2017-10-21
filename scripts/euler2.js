
window.onload = function() { // Set up event listener for the new limit input.
    document.getElementById("submitBtn").addEventListener("click", function() { 
    	newCalc(4000000);
    }, false);
}

function newCalc(limit) { // Generate new array, calculate the sum and update the display.
	var fibList = generateFibList(limit);	
	var sum = calcSum(fibList);
	updateDisplay(sum);
}

function generateFibList(limit) { // Create an array of Fib numbers not exceding the limit. Returns an array.
	fibList = [1, 1];

	for (var i = 1; fibList[i] + fibList[i - 1] <= limit; i++) {
		fibList[i + 1] = fibList[i] + fibList[i - 1];
	} return fibList;
}

function calcSum(fibList) { // Calculates sum of all numbers in an array. Returns a number.
	var sum, i = 0;

	for (i; i <= fibList.length - 1 ; i++) {
		if (fibList[i] % 2 === 0) { sum += fibList[i]; }
	} return sum;
}

function updateDisplay(sum) { // Displays the sum of the new arrays elements in HTML.
	document.getElementById("numDisplay").innerHTML = sum;	
}
