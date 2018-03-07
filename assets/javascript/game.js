/* BEGIN JAVASCRIPT*/

var hangmanChoices = ["lagoon", "breeze", "island", "snorkel", "coconut", "rum", "surf", "sunscreen", "wave", "sand", "sunset"];
var dashes = ["-", "-","-","-","-","-","-","-","-", ];
var wins = 0;
var losses = 0;
var currentWord = null;
var guessesRemaining = null;
var alreadyGuessed = null;
document.onkeyup = function(event) {
    var userGuess = event.key;
    var html =
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>"
    "<p>currentWord:</p>"
    "<p>guessesRemaining</p>"
    "<p>alreadyGuesses </p>";
   
    document.querySelector("#beginning").innerHTML = html;
};



/* END JAVASCRIPT*/