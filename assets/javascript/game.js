// I need the user to make a choice
// Computer to make a choice
// Caputure these choices 
// Compare thes choices, and determine a correct guess, wrong guess
// Display the result to the user 

var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m"
,"n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userguess);

    var computerGuess = options[Math.floor(Math.random()*options.length)]; 
    console.log(computerGuess);

    // var yourGuess = userguess.


    if (userguess === computerGuess) {
        wins++;
        alert ("chosen correctly");
    } 
    else if((userguess != computerGuess) && (guessesLeft > 1)) {
        guessesLeft = guessesLeft -1;

    }
    else {
        losses++;
        guessesLeft = 9;
    //     lettersGuessed.length = 0;
    //     computerGuess.length =0;
    // }
}
    var html = "<p>Press any letter key to begin playing</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses remaining: " + guessesLeft + "</p>" 

    document.querySelector("#game").innerHTML = html;
    
};
