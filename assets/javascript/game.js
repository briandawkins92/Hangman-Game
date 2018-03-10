/* BEGIN JAVASCRIPT*/

var hangmanArray = ["lagoon", "breeze", "island", "coconut", "sunscreen", "sunset", "snorkel"];

var wins = 0;
var losses = 0;
var currentWord = [];
var guessesRemaining = 15;
var alreadyGuessed = [];

var chosenWord = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];
// hangmanWord = chosenWord.replace(/\D/g, "_ ");



console.log(chosenWord);
// console.log(hangmanWord);
function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}
document.onclick = once(function(event) {
    
    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p #word>Current Word:" + chosenWord.replace(/\D/g, "_ "); + "</p>" +
    "<p>Guesses Remaining:" + guessesRemaining + "</p>" +
    "<p>Already Guessed:" + alreadyGuessed.push(); + "</p>";

    document.querySelector("#beginning").innerHTML = html;
    
});

document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log(userGuess);

    // var word = document.getElementById("word");
   for (var i = 0; i < chosenWord.length; i++) {
        if(userGuess==chosenWord.charAt(i)) {
            // var newDiv = document.createElement("p");
            // newDiv.textContent = userGuess;
            // word.appendChild(newDiv);
            console.log(chosenWord);
        }
// do append child!!! // 
    };


 var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Current Word:" + chosenWord + "</p>" +
    "<p>Guesses Remaining:" + guessesRemaining + "</p>" +
    "<p>Already Guessed:" + alreadyGuessed.push(); + "</p>";

    document.querySelector("#beginning").innerHTML = html;



    //    if (chosenWord.includes = userGuess) {
//        console.log("hello");
//         guessesRemaining++;
//    }
    
};
    



    






/* END JAVASCRIPT*/