
// Create an array of Trump Quotes
function createQuoteLibrary() {
    trumpQuotes = [
                        "\"You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful piece of ass\"",
                        "\"Part of the beauty of me is that I am very rich.\"",
                        "\"When I think I’m right, nothing bothers me.\"",
                        "\"I have a great relationship with the blacks.\"",
                        "\"I believe [the media] like making me out to be something more sinister than I really am.\"",
                        "\"I will be so good at the military your head will spin.\"",
                        "\"No, I’m not into anal.\"",
                        "\"I don’t even consider myself ambitious.\"",
                        "\"As everybody knows, but the haters & losers refuse to acknowledge, I do not wear a “wig.” My hair may not be perfect but it’s mine.\"",
                        "\"I love Oprah. Oprah would always be my first choice [for Vice President]\"",
                        "\"Well, someone’s doing the raping, Don! I mean, somebody’s doing it. Who’s doing the raping? Who’s doing the raping?\"",
                        "\“I think if this country gets any kinder or gentler, it’s literally going to cease to exist.\"",
                        "\“I will be the greatest jobs president God ever created.\"",
                        "\“Perhaps I shouldn’t campaign at all, I’ll just, you know, I’ll ride it right into the White House.\"",
                        "\“How stupid are the people of Iowa?\"",
                        "\"I'd like to hear his wife say something,\" - Trump told " + '<a target="blank" href="http://mobile.nytimes.com/2016/07/30/opinion/trumps-thunderbolts.html?_r=0">The New York Times</a>' + " in response to criticism from the Muslim father of a deceased Army hero.",
                        "\"Incredible.\"",
                        "\“Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don’t feel so stupid or insecure, it’s not your fault\"",
                        "\"My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body.\"",
                        "\"They’re rapists. And some, I assume, are good people.\"",
                        "\"If Hillary Clinton can’t satisfy her husband what makes her think she can satisfy America.\"",
                        "\"Today I officially declare my candidacy for President of the United States.\""
                    ];
// Create an array of non-Trump Quotes
    notTrumpQuotes = [
                        "\"What's the deal with Canadians anyway?\"",
                        "\"Bernie is a tired socialist who should retire already.\"",
                        "\"Putin is the man.\"",
                        "\"Listen. Russia are doing a great job, okay?\"",
                        "\"No one needs free healthcare. What is this, Cuba?\"",
                        "\"A vote for Hillary is like putting a gun to your head and pulling the trigger.\"",
                        "\"I'm proud of my daughter, Ivanka. She's pretty hot, right?\""
                    ];
}

// Set default button state
function setDefault() {
    $('#actionButtonTrump-true') .removeClass('correctAnswer') .addClass('defaultButtonState');
    $("#actionButtonTrump-false") .removeClass('correctAnswer') .addClass("defaultButtonState");
}

// Select random array
function getQuote() {
    var randomNum = Math.floor((Math.random() * 100) + 1); // Generate a random number between 1-100
    if ((randomNum % 2) == 0) { getTrumpQuote(); localStorage.setItem("answer", 1) } 
    else { getNotTrumpQuote(); localStorage.setItem("answer", 0) }
}

// Pick a random Trump quote
function getTrumpQuote() {
    var n = trumpQuotes.length - 1;
    var randomQuote = trumpQuotes[Math.floor(Math.random() * n)];
    document.getElementById("displayedQuote").innerHTML = randomQuote;
}

// Pick a random non-Trump quote
function getNotTrumpQuote() {
    var n = notTrumpQuotes.length - 1;
    var randomQuote = notTrumpQuotes[Math.floor(Math.random() * n)];
    document.getElementById("displayedQuote").innerHTML = randomQuote;
}

function result(response) {
    if (localStorage.getItem("answer") == response) {
        if (response == 1) { console.log("Correct answer by clicking Trump") }
        if (response == 0) { console.log("Correct answer by clicking not Trump") }
        
        localStorage.clear();
        getQuote();
        setDefault();
    } else {
        if (response == 1) { console.log("Incorrect answer by clicking Trump") }
        if (response == 0) { console.log("Incorrect answer by clicking not Trump") }

        localStorage.clear();
        getQuote();
        setDefault();
    }
}

// END