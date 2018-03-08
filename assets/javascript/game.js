/* BEGIN JAVASCRIPT*/

var hangmanArray = ["lagoon", "breeze", "island", "coconut", "sunscreen", "sunset", "snorkel"];

// var hangmanChoices = {
//     lagoon: "_ _ _ _ _ _",
//     breeze: "_ _ _ _ _ _",
//     island: "_ _ _ _ _ _",
//     coconut: "_ _ _ _ _ _ _",
//     sunscreen: "_ _ _ _ _ _ _ _ _",
//     sunset: "_ _ _ _ _ _",
//     snorkel: "_ _ _ _ _ _ _"


   
// };


var wins = 0;
var losses = 0;
var currentWord = [];
var guessesRemaining = 15;
var alreadyGuessed = [];
document.onkeyup = function(event) {
    // var userGuess = event.key;

   
    var chosenWord = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];
    hangmanWord = chosenWord.replace(/\D/g, "_ ");
    console.log(chosenWord);
    console.log(hangmanWord);
    


    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Current Word:" + hangmanWord + "</p>" +
    "<p>Guesses Remaining:" + guessesRemaining + "</p>" +
    "<p>Already Guessed:" + alreadyGuessed.push(); + "</p>";

    document.querySelector("#beginning").innerHTML = html;


};



/* END JAVASCRIPT*/