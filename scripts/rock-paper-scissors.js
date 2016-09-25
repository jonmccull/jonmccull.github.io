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

// Logic to determine who won, Computer ("compChoice") or User ("choice1")
function determineWinner(choice1,compChoice) {
    var winner;

    if ( choice1 === compChoice ) { winner = tie; }
    else {
        switch(choice1) {
            case rock:
                if ( compChoice === paper ) { winner = paper }
                else { winner = rock }
                break;
            case paper:
                if ( compChoice === rock ) { winner = paper }
                else { winner = scissors }
                break;
            case scissors:
                if ( compChoice === rock ) { winner = rock }
                else { winner = scissors }
                break;
            default:
                winner = tie;
        }
    }
    announceWinner(winner,compChoice);
};

// Updates text in header with Computer's choice and who won this round        
function announceWinner(winner,compChoice) {
    compChoiceDisplay.innerHTML = "Computer picks " + compChoice;

    if (winner === tie ) { result.innerHTML = tie }
    else { result.innerHTML = winner + " wins!"; }
};

// Randomly select the Computer's choice (rock, paper or scissors)
function getCompChoice() {
    compChoice = Math.floor(Math.random()*3);

    if (compChoice === 1) { compChoice = rock }
        else {
            if ( compChoice === 2) { compChoice = paper }
            else { compChoice = scissors }
    }
    return compChoice;
};

// Launch a new round
function newGame(choice) {
    determineWinner(choice, getCompChoice());
};