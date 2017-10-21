// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


window.onload = function() { // Set up event listener for the new limit input.
    document.getElementById("submitBtn").addEventListener("click", function() { 
    	var newlimit = document.getElementById("maxNumInput").value;
    	var primes = getPrimeFactors(newlimit);
    	var maxPrime = getMaxOfArray(primes);

    	updateDisplay(maxPrime);

    	console.log("The prime factors of " + newlimit + " are " + primes);
    	console.log("Max prime is " + maxPrime);
    }, false);
}

function getPrimeFactors(num) { // Create array of a number's prime factors. Returns an array.
	var primesArray = [];

	for (var i = 2; i <= num; i++) {
		if(num % i == 0) { 
			primesArray.push(i);
			num /= i;
		}
	} return primesArray;
}

function getMaxOfArray(numArray) { // Finds the max number in an array. Returns a number.
  return Math.max.apply(null, numArray);
}

function updateDisplay(maxPrime) { // Displays the max prime of the new limit in HTML.
	document.getElementById("numDisplay").innerHTML = "The largets prime number is " + maxPrime;	
}