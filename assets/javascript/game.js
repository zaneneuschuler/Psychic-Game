
$(document).ready(function(){
    var wins = 0;
    var losses = 0;
    var winFlag = 0;
    //init wins losses and guesses
    $('.wins').html("<h4>Wins:");
    $('.losses').html("<h4>Losses:");
    $('.guesses').html("<h4>Your guesses:");
    $('.left').html("<h4>Guesses left: 10</h4>");

    //init guesses array
    let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //my organization sucks.
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var guessesLeft = 10;
    //init userguesses
    var userGuesses = [];
    $(document).keyup(function(){
        //init guesses
        let userGuess = event.key;
       

        //send to another function if it's an actual letter
        if(computerChoices.includes(userGuess)){
            //if win flag is set
            if(winFlag ==1){
                //clear userGuesses
                for (let i = userGuesses.length; i > 0; i--) {
                    userGuesses.pop();     
                }
                //empty winner and reset win flag
                $('.winner').empty();
                $('.yawin').empty();
                winFlag--;
            }
            doGame(userGuess, computerGuess);
        }
    });
    //take care of actually doing the game
    function doGame(user, computer) {
        //because i can't tell how else to do this, just use a flag
        let dupeFlag = 0;
        //iterate through userguesses to see if dupe
        for (let i = 0; i < userGuesses.length; i++) {
            if (user == userGuesses[i]) {
                dupeFlag++;
                break;
            }    
        }
        //if not a dupe
        if(dupeFlag == 0){
            userGuesses.push(user);
            if (user == computer) {
                winFlag++;
                userWin();
                
            } else {
                if (guessesLeft > 1) {
                    guessesLeft--;
                } else {
                    winFlag++;
                    userLose();
                }
                
                
            }

            $('.wins').html("<h4>Wins: " + wins + "</h4>");
            $('.losses').html("<h4>Losses: " + losses + "</h4>");
            $('.guesses').html("<h4>Your guesses: " + userGuesses + "</h4>");
            $('.left').html("<h4>Guesses left: " + guessesLeft);
        }
    function userWin() {
        wins++;
        $(".winner").html("<img src=assets/images/bb2.png>");
        $(".yawin").html("<h4>You win! Press a key to try again!</h4>");
        $('.wins').html("<h4>Wins: " + wins + "</h4>");
        

        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessesLeft = 10; 
    }
    function userLose() {
        losses++;
        $('.losses').html("<h4>Losses: " + losses + "</h4>");
        $('.yawin').html("<h4>You lose! Press a key to try again!</h4>");
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         guessesLeft = 10; 
        
    }

        
        
    }
});