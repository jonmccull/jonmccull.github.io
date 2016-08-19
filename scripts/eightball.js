
var eightBall = {

    answers: [
            "It is decidedly so",
            "Without a doubt",
            "Yes, definitely",
            "It is certain",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Reply hazy try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful"
        ],

    pickAnswer: function() {
    // Generate a random number between 1-100
        var n = eightBall.length - 1;
        var answer = eightBall[Math.floor(Math.random() * n)];

        return answer;
    }
}
/*
var handleQuestion = {
    theAnswer: eightBall.pickAnswer
}
*/

function testListener () {
    console.log("Listener event triggered");
}

