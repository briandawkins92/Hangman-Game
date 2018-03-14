/* BEGIN JAVASCRIPT*/

var hangmanArray = ["sand", "waves", "island", "crab", "shark", "snorkel"];

// Establish InnerHTML VARs // 
var wins = 0,
currentWord = [""],
guessesRemaining = 10,
alreadyGuessed = [""],

document,onload = function() {
    var html =
    "<p>" + "Press Any Key To Get Started!" + "</p>"+
    "<p>Wins: " + wins + "</p>" ;
    document.querySelector("#wins").innerHTML = html;

// Create Word and Replace with Dashes // 
var chosenWord = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];
var secretWord = chosenWord.split( "");
for(var i=0; i < secretWord.length; i++) {
secretWord[i] = secretWord[i].replace(/\D/g, "_ "); 
}
var noDashesWord = secretWord.join("");

var htmlBody=
    "<p>Current Word: " + noDashesWord + "</p>" +
    "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
    "<p>Already Guessed: " + alreadyGuessed.join(""); + "</p>";
    document.querySelector("#beginning").innerHTML = htmlBody;

document.onkeyup = function(event) {

    var userGuess = event.key
  
    var html =
        "<p>Current Word: " + noDashesWord + "</p>" +
        "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
        "<p>Already Guessed: " + alreadyGuessed.join(""); + "</p>";
    document.querySelector("#beginning").innerHTML = html;

//Determine if the User Guess is one of the characters of the word // 
    for(var i=0; i < secretWord.length; i++) {
    if(userGuess === chosenWord[i]) {
        secretWord[i] = userGuess;
        var noDashesWord = secretWord.join("");
        } else { 
        var noDashesWord = secretWord.join("");
        }
    }
    alreadyGuessed.push(userGuess);

    // Determine if user wins // 
    if (noDashesWord === chosenWord) {
        var congrats = confirm("Congrats! You Win! Press Ok to Play Again");
        
        wins++;
        currentWord = [""];
        guessesRemaining = 10;
        console.log(guessesRemaining)
        alreadyGuessed = [""];
        
        chosenWord = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];
        secretWord = chosenWord.split( "");
        for(var i=0; i < secretWord.length; i++) {
            secretWord[i] = secretWord[i].replace(/\D/g, "_ "); 
        }
        noDashesWord = secretWord.join("");

        var html =
        "<p>" + "Press Any Key To Get Started!" + "</p>"+
        "<p>Wins: " + wins + "</p>" ;
        document.querySelector("#wins").innerHTML = html;
        var html =

        "<p>Current Word: " + noDashesWord + "</p>" +
        "<p>Guesses Remaining: " + guessesRemaining-- + "</p>" +
        "<p>Already Guessed: " + alreadyGuessed.join(""); + "</p>";
    document.querySelector("#beginning").innerHTML = html;
   
    }

// Determine if user ran out of guesses and lost// 
    if (guessesRemaining === 0) {
      var losePlayAgain = confirm("You Lose! Press OK to Play Again");

    }

    if (losePlayAgain){
       location.reload();
    }
    var html =

            "<p>Current Word: " + noDashesWord + "</p>" +
            "<p>Guesses Remaining: " + guessesRemaining-- + "</p>" +
            "<p>Already Guessed: " + alreadyGuessed.join(""); + "</p>";
        document.querySelector("#beginning").innerHTML = html;
    
    
}
};
  

/* END JAVASCRIPT*/
