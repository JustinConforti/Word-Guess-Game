let possibleWords = ["greyhound", "poodle", "boxer", "dobermann", "pitbull", "greyhound", "terrier",
    "bloodhound", "bullmastiff"
];

let wordRandom = Math.floor(Math.random() * possibleWords.length)
let rightGuess = [];
let wrongGuess = [];
let underScore = [];
var lives;
var counter;
var space;
let choosenWord = possibleWords[wordRandom];

let classUnderScore = document.getElementsByClassName('underscores');
let classRightGuess = document.getElementsByClassName('rightGuess');
let classWrongGuess = document.getElementsByClassName('wrongGuess');
let showLives = document.getElementById("livesRemaining")

console.log(choosenWord);

play = function() {
    let possibleWords = ["greyhound", "poodle", "boxer", "dobermann", "pitbull", "greyhound", "terrier",
    "bloodhound", "bullmastiff"
];

    let wordRandom = Math.floor(Math.random() * possibleWords.length)

   
    
   

    rightGuess = [];
    wrongGuess = [];
    lives = 10;
    counter = 0;
    space = 0;
    comments();
   
   
    // selectCat();
    // canvas();
    // result();

  };

comments = function() {
    livesRemaining.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        livesRemaining.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        livesRemaining.innerHTML = "You Win!";
      }
    }
  };


//arrow function that will push dashes for choosenWord length
let generateUnderscore = () => {

    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push("_");

    }
    return underScore;
}

// Add event listenter waiting for keypress, using keyboardEvent to identify what letter was pressed
// The keyboardEvent returns the letter pressed as well as a letter code of the key that triggered the onkeypress event.

document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);

    //will add the letter to the rightGuess array
    if (choosenWord.indexOf(keyword) > -1) {
        rightGuess.push(keyword)
        console.log(rightGuess)
        // if any index positions of choosenWord array matches the keyword, that letter gets pushed to the correct underScore
        underScore[choosenWord.indexOf(keyword)] = keyword;
        classUnderScore[0].innerHTML = underScore.join('');
        classRightGuess[0].innerHTML = rightGuess;

        console.log(underScore)

        if (underScore.join('') == choosenWord) {
            alert("You Win!");
        }
    } else { // else the letter will be pushed to wrongGuess array
        wrongGuess.push(keyword)
        classWrongGuess[0].innerHTML = wrongGuess;

    }




});

classUnderScore[0].innerHTML = generateUnderscore().join(' ');

document.getElementById("reset").onclick = function() {
    wrongGuess = [];
    correctGuess = [];

    
    
    play();
  };
