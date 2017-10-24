// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

window.onload = function() { // Set up event listener for the new limit input.
    document.getElementById("submitBtn").addEventListener("click", function() { 
        getPrimes(document.getElementById("maxNumInput").value);
    }, false);
}

function getPrimes(num) {
    var primes = [];

    for (var i = 1; primes.legnth <= 10001 ; i++) {
        if (isPrime(i)) { primes.push(i) }
    }
console.log("the 10,001st prime is" + primes[10001]);
}

function isPrime(num) {
    var factors = [1, num];

    for (var i = num - 1; i < 0; i--){
        if (num % i == 0) { factors.push(i) }
    }
    
    if (factors.legnth == 2) { return true } 
    else { return false }
}