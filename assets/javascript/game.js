var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var playerChoices = [];

document.onkeyup = function(event) {
    
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.lenght)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	
    if (options.indexOf(userGuess) > -1) {
   
         if (userGuess === computerGuess) {
             wins++;
             guessesLeft = 9;
             playerChoices = [];
         }
         else {
            if (playerGuess.includes(userGuess)) {
             
             }
             else {
                 guessesLeft--;
                 playerChoices.push(userGuess);
             }
            
        }
         
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            playerChoices = [];
            
        } 
            
             var html = "<h1>Psychic Game</h1>" + "<p>What letter I'm thinking of!</p>" +
                    "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" +
                    "<p>guessesLeft:" + guessesLeft + "</p>" + "<p>playerChoices:" + playerChoices.join(", ") + "</p>";

                    document.querySelector("#game").innerHTML = html;
        
            
            
    }
    
};
