// I need the user to make a choice
// Computer to make a choice
// Caputure these choices 
// Compare thes choices, and determine a correct guess, wrong guess
// Display the result to the user 

// Array of letter for the computer to randomly select from

var computerSelects = ["a","b","c","d","e","f","g","h","i","j","k","l","m"
,"n","o","p","q","r","s","t","u","v","w","x","y","z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess =[];


document.onkeyup = function(event) {
    var userguess = event.key.toLowerCase();
    
    // console.log('Player:' + userguess);
    
    var computerGuess = computerSelects[Math.floor(Math.random()*computerSelects.length)]; 
    
    // console.log("computer:" +computerGuess);
    
    // A-Z 65-90  a-z 97-122
    if(event.keyCode <=90 && event.keyCode>=65){
        yourGuess.push(userguess);
        console.log('success');
    // }else if(event.keyCode <=122 && event.keyCode >=97){
    //     yourGuess.push(userguess);
    //     console.log('success');
    }else alert('Please select a letter');


    var restart = function() {
	    guessesLeft = 9;
	    yourGuess = [];
	// var computerGuess = computerSelects[Math.floor(Math.random() * computerSelects.length)];
}



    if (userguess === computerGuess) {
        wins++;
        restart();
        alert ("Good Guess");
    } 
    else if((userguess != computerGuess) && (guessesLeft > 1)) {
        guessesLeft = guessesLeft -1;
        

    }
    else {
        losses++;
        guessesLeft = 9;
        guessesLeft = [];
        restart();  
}
    var html = "<p>Press any letter key to begin playing</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses remaining: " + guessesLeft + "</p>" +
    "<p>You Guessed: " + yourGuess + "</p>" ;
    

    document.querySelector("#game").innerHTML = html;
    
};