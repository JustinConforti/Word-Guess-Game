window.onload = function () {


        // initalizing global variables with var 
    var everyLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    var choosenWord; 
    var userGuess;
    var usedGuesses = [];
    var lives; // Lives
    var counter; // Count correct gusses
    var space; // Number of spaces in word '-'
    let underScore = [];


        // setting HTML hooks 
    var showLives = document.getElementById("mylives");
    let classUnderScore = document.getElementsByClassName('underscores');



     var buttons = function () {
        myButtons = document.getElementById('buttons'); // hooking html div "buttons" to myButtons variable
        letters = document.createElement('ul'); // using js to create a UL child element called letters

        for (let i = 0; i < everyLetter.length; i++) {
            letters.id = "alphabet";  // assigns the ID alaphabet to the letters unordered list
            list = document.createElement("li") // creates a child (list item) called list
            list.id = "letter"; // assigns the id letter to the new list 
            list.innerHTML = everyLetter[i]; // assigns everyLetter at its current index of the loop to list's innerHTML
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

   
    generateUnderscore = function () {

        for (let i = 0; i < choosenWord.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
        }
    
        for (let i = 0; i < choosenWord.length; i++) {
            underScore.push(" _ ");
            classUnderScore[0].innerHTML = underScore.join('');
        }
      }
      generateUnderscore()
     
    }
    



    comments = function() {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
          showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < choosenWord.length; i++) {
            if (counter + space === choosenWord.length) {
            showLives.innerHTML = "You Win!";
          }
        }
      };
      
 // Going to use an OnClick Function instead EventListner as I know exactly where the user will be clicking to guess
 check = function () {
    list.onclick = function () {
      var userGuess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < choosenWord.length; i++) {
        if (choosenWord[i] === userGuess) {
            classUnderScore[i].innerHTML = userGuess
          counter += 1;
        } 
      }
      var j = (choosenWord.indexOf(userGuess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    } 
  }


   var play = function() {
        let possibleWords = ["greyhound", "poodle", "boxer", "dobermann", "pitbull", "greyhound", "terrier",
        "bloodhound", "bullmastiff"
    ];

    
        choosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        // word = word.replace(/\s/g, "-"); // may possibly need this if adding word with a dash
        console.log(choosenWord)
    lives = 10;
    counter = 0;
    result();
    comments();
    buttons();




    }

    play();

    document.getElementById("reset").onclick = function() {
    
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        play();
        alert("You have restarted, press any key to start again");
      };

    }




    // document.addEventListener('keypress', (event) => {
    // let keyword = String.fromCharCode(event.keyCode);
    
    //      //will add the letter to the rightGuess array
    //      if (choosenWord.indexOf(keyword) > -1) {
    //          rightGuess.push(keyword)
    //          console.log(rightGuess)
    //         // if any index positions of choosenWord array matches the keyword, that letter gets pushed to the correct underScore
    //   underScore[choosenWord.indexOf(keyword)] = keyword;
    //          classUnderScore[0].innerHTML = underScore.join('');
    //         classRightGuess[0].innerHTML = rightGuess;
    
    //          console.log(underScore)
    
    //          if (underScore.join('') == choosenWord) {
    //              alert("You Win!");
    //          }
    //     } else { // else the letter will be pushed to wrongGuess array

    //          wrongGuess.push(keyword)
    //          classWrongGuess[0].innerHTML = wrongGuess;
    //          lives -= 1
    //          comments()
    
    //  }
    
    //  });
