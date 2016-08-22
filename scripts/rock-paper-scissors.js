var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var tie = "It's a tie!"

// Listen for user choice on button click
window.onload=function() {
    var compChoiceDisplay = document.getElementById("compChoiceDisplay");
    var result = document.getElementById("result");

    document.getElementById("rock").addEventListener("click", function() { newGame("rock"); }, false);
    document.getElementById("paper").addEventListener("click", function() { newGame("paper"); }, false);
    document.getElementById("scissors").addEventListener("click", function() { newGame("scissors"); }, false); }

function determineWinner(choice1,compChoice) {
    var winner;         

    if ( choice1 === compChoice ) { winner = tie; }
        else if ( choice1 === rock  ) { 
             if ( compChoice === paper ) { winner = paper }
             else { winner = rock }
        }
        else if ( choice1 === paper ) {
             if ( compChoice === rock  ) { winner = paper }
             else { winner = scissors }
        }
        else if ( choice1 === scissors ) {
             if ( compChoice === rock ) { winner = rock }
             else { winner = scissors }
        }

    announceWinner(winner,compChoice);
};
        
function announceWinner(winner,compChoice) {
    compChoiceDisplay.innerHTML = "Computer picks " + compChoice;

    if (winner === tie ) { result.innerHTML = tie }
    else { result.innerHTML = winner + " wins!"; }
};

function getCompChoice() {
    compChoice = Math.floor(Math.random()*3);

    if (compChoice === 1) { compChoice = rock } 
        else {
            if ( compChoice === 2) { compChoice = paper }
            else { compChoice = scissors }
    }
    return compChoice;
};

function newGame(choice) {
    determineWinner(choice, getCompChoice());
};

        

