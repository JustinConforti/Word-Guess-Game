window.onload = function () {


    let possibleBreeds = [
        "alaskanmalamute", "akita", "bulldog", "beagle", "poodle", "rottweiler"
    ]
    var maxGuesses = 10;
    let guessedLetters = []; // letters that the user has guessed
    let guessingWord = []; // this will be used to compare user guesses to actual word
    let pickedWord; // the index of the word that was randomly selected from possibleBreeds array
    let guessesRemaining = 0; // user's lives remaining
    let gameFinished = false; // status used to mark if game has finished
    let userWins = 0; // to keep track of users total wins throughout the rounds

    var winImage = document.getElementById("youWinImage");
    var loseImage = document.getElementById("youLoseImage");
    var restartKey = document.getElementById("pressToTryAgainKey");
    var displayUserWins = document.getElementById("userTotalWins");
    var userWord = document.getElementById("userCurrentWord");
    var userGuessesRemaining = document.getElementById("userGuessesRemaining");
    var userGuessedLetters = document.getElementById("userGuessed");


    var startNewRound = function () {
        gameFinished = false;

        guessesRemaining = 10;
        guessedLetters = [];
        guessingWord = [];

        pickedWord = Math.floor(Math.random() * (possibleBreeds.length));
    
        for (let i = 0; i < possibleBreeds[pickedWord].length; i++) {

            guessingWord.push(" _ ");

        }
        document.getElementById("hangmanAnimation").src = "assets/images/0.jpg"; // make sure hangman image is cleared
        document.getElementById("hangmanAnimation").style.cssText = "display: block";


        console.log(possibleBreeds[pickedWord])
        // assigning guessingWord to the HTML hook userWord

        // Hidding necessary buttons
        winImage.style.cssText = "display: none";
        loseImage.style.cssText = "display: none";
        restartKey.style.visibility = "display: none";

        // updates the HTML to show current status of game
        updateScreen()

    }

    startNewRound()

    function updateScreen() { // updates correct values for each HTML item on page

        displayUserWins.innerHTML = userWins
        userGuessedLetters.innerHTML = guessedLetters
        userGuessesRemaining.innerHTML = guessesRemaining
        userWord.innerText = ""
        for (let i = 0; i < guessingWord.length; i++) {

            userWord.innerText += guessingWord[i]

        }
        if (guessesRemaining <= 0) {
            loseImage.style.visibility = "visible";
            restartKey.style.visibility = "visible";
            gameFinished = true;
        }


        // imgCharacter.src = ""
        // characterSRC = "assets/images/"
        // switch (possibleBreeds[pickedWord]) {
        //     case "poodle":
        //         characterSRC = characterSRC + "bran.jpg"
        //         break;
          
        // }

    } 
    

    document.onkeydown = function (event) {
        // checking to see if gameFinished = true, if so it will fire startNewRound function and set gameFinished flag to false
        if (gameFinished) {
            startNewRound();
            gameFinished = false;
        } else {
            // Check to make sure a-z was pressed.
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                theUserGuesses(event.key.toLowerCase());


            }
        }
    };

    function updateHangmanAnimation() {
        document.getElementById("hangmanAnimation").src = "assets/images/" + (maxGuesses - guessesRemaining) + ".jpg";
    };

    function theUserGuesses(letterIndex) {

        if (guessesRemaining > 0) { // to ensure user still has guesses remaining before evaluating letter guessed


            if (guessedLetters.indexOf(letterIndex) === -1) { // checking if what letter the user guessed has already been guessed
                guessedLetters.push(letterIndex); // if not already guessed, pushes the letter to gussedLetter array
                checkTheGuess(letterIndex)

            }
        }

        updateScreen()
        checkForWin()
        // check for win condition?

    }

    function checkTheGuess(letterIndex) {

        let checkPosition = [];

        for (let i = 0; i < possibleBreeds[pickedWord].length; i++) {
            if (possibleBreeds[pickedWord][i] === letterIndex) {
                checkPosition.push(i);
            }
        }

        if (checkPosition.length <= 0) {
            guessesRemaining = guessesRemaining - 1
            updateHangmanAnimation();
        } else {
            for (let i = 0; i < checkPosition.length; i++) {

                guessingWord[checkPosition[i]] = letterIndex

            }

        }
        console.log(guessingWord)

        updateScreen()
    }

    function checkForWin() {
        if (guessingWord.indexOf(" _ ") === -1) {
            winImage.style.cssText = "display: block";
            document.getElementById("pressToTryAgainKey").style.cssText = "display: block";
            userWins++;
            hasFinished = true;
            alert("The word was: " + guessingWord.join( "" ))
        if (hasFinished = true) {
            startNewRound()
        }
        }
    };



}