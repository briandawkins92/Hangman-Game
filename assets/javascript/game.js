/* BEGIN JAVASCRIPT*/

var hangmanChoices = ["lagoon", "breeze", "island", "snorkel", "coconut", "rum", "surf", "sunscreen", "wave", "sand", "sunset"];
var dashes = ["-", "-","-","-","-","-","-","-","-", ];

var wins = 0;
var losses = 0;
var currentWord = 0;
var guessesRemaining = 0;
var alreadyGuessed = 0;

document.onkeyup = function(event) {
    var userGuess = event.key;
    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Current Word:" + currentWord + "</p>" +
    "<p>Guesses Remaining:" + guessesRemaining + "</p>" +
    "<p>Already Guessed:" + alreadyGuessed + "</p>";

    document.querySelector("#beginning").innerHTML = html;
        var hangmanWord = hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];
    console.log(hangmanWord);

};



/* END JAVASCRIPT*/