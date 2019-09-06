//Creating an array of letters for computer choices
var computerChoices = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var letterOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


//Set all variables to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var playerChoices = [];

//It will run the function when user presses the key
document.onkeyup = function(event) {
    
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.lenght)];

     if (letterOption.indexOf(userGuess) > -1) {
   
         if (userGuess === computerGuess) {
             wins++;
             guessesLeft = 9;
             playerChoices = [];
             document.querySelector("wins").innerHTML = "WINS:" + wins;
             restart();
         }
         else {
            if (playerChoices.includes(userGuess)) {
             
             }
             else {
                 guessesLeft--;
                 playerChoices.push(userGuess);
             }
            
        }
         
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            playerChoices = [];
            document.querySelector("losses").innerHTML = "LOSSES:" + losses;
            restart();
            
        } 
            
         var html = "<h1>Psychic Game</h1>" + "<h2>What letter I'm thinking of!</h2>" + 
         
         "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" +
        
         "<p>Guesses Left:" + guessesLeft + "</p>" + "<p>Your Guesses so far:" + playerChoices.join(", ") + "</p>";

         document.querySelector("#mainContainer").innerHTML = html;
        
            
        }
    
};