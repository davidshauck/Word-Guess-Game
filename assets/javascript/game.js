let words = ["hello", "door", "popsicle", "carpet", "burger", "pants", "code", "magic", "elephant", "horse", "whale", "laundry", "television", "school", "tennis", "baseball", "gymnastics"]
let usedLetters = " ";
let guesses = 6;
let correctGuesses = " ";
let completeWord = " ";
let head = "||";
let torso = "||";
let legs = "||";
let blankWord = "_";


// Computer picks a word //
let wordChoice = words[Math.floor(Math.random()*11)]

// generates blank word field //
for (i = 1; i < wordChoice.length; i++) {
    blankWord = blankWord + "_";
}
let letterUpdate = blankWord;



// start of game //
// document.getElementById("game").addEventListener("click", myFunction);

function myFunction() {
    // let html = "<p>This word contains " + wordChoice.length + " letters" +
    let html = "<p>" + blankWord;
    document.getElementById("display").innerHTML = html;
    // "<p>-----" +
    // "<br>" + head +
    // "<br>" + torso +
    // "<br>" + legs +
    // "<br>--" +
    let html2 = "<p> Used letters: " + usedLetters;
    document.getElementById("used").innerHTML = html2;
}

// User begins to play //
document.onkeyup = function (e) { 

    // As user guesses, check to see if any letters match. ßFill in correct letters or list used letters
    let letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // determines what position the guessed letter is in //
    let letterPosition = wordChoice.indexOf(letterGuess);
    // determines if the letter is used a 2nd time
    let letterPosition2 = wordChoice.indexOf(letterGuess, letterPosition + 1);

    // variables to test whether the letter guessed is in the word or has been used //
    let inWord = wordChoice.includes(letterGuess);
    let inUsedLetters = usedLetters.includes(letterGuess);
    let inCorrectGuesses = correctGuesses.includes(letterGuess);

    //  if the letter is in the word but hasn't been guessed before //
    if (inWord && !inUsedLetters && !inCorrectGuesses) {
        // I searched for a lot of find/replace options and ended up using the one below. I sort of get how it works. Found at https://www.tutorialspoint.com/online_html_editor.php //
        letterUpdate = blankWord.substr(0, letterPosition) + letterGuess + letterUpdate.substr(letterPosition + 1);
        blankWord = letterUpdate;
        if (letterPosition2 > 0) {
             letterUpdate = blankWord.substr(0, letterPosition2) + letterGuess + letterUpdate.substr(letterPosition2 + 1);
             blankWord = letterUpdate;
        }
        correctGuesses += letterGuess;
    }
    // remove space bar as one of the choices, allows space bar to begin game without wasting a turn //
    else if (e.keyCode === 32) {
        alert("Press OK");
    }
    //  if letter has been guessed //
    else if (inUsedLetters || inCorrectGuesses) {
        alert("You've already used that letter");
    }
    // if letter is not in word or hasn't been guessed //
    else {
        usedLetters += letterGuess;
        // reduce guesses by 1 //
        guesses -= 1;
        // html for what happens to hangman graphic upon each guess remaining //
        if (guesses === 5) {
            head = head + "&nbsp;&nbsp;&nbsp;&nbsp;O";
            document.getElementById("myImg").src = "assets/images/head.gif";
        }
        if (guesses === 4) {
            torso = torso + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|";
            document.getElementById("myImg").src = "assets/images/torso.gif";
        }
        if (guesses === 3) {
            torso = "||&nbsp;&nbsp;&nbsp;&nbsp;-|";
            document.getElementById("myImg").src = "assets/images/one-arm.gif";
        }
        if (guesses === 2) {
            torso = "||&nbsp;&nbsp;&nbsp;&nbsp;-|-";
            document.getElementById("myImg").src = "assets/images/two-arms.gif";
        }
        if (guesses === 1) {
            legs = legs + "&nbsp;&nbsp;&nbsp;&nbsp;/";
            document.getElementById("myImg").src = "assets/images/one-leg.gif";
        }
        // if (guesses === 0) {
        //     legs = "||&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;\\";
        //     alert("Game over");
        //     let lose = "<p>The word was " + wordChoice;
        //     document.querySelector("#lose").innerHTML = lose;
        // }
    }

// display html //

    // let html = "<p>This word contains " + wordChoice.length + " letters" +
    let html = "<p>" + blankWord;
    document.getElementById("display").innerHTML = html;
    // "<p>-----" +
    // "<br>" + head +
    // "<br>" + torso +
    // "<br>" + legs +
    // "<br>--" +
    let html2 = "<p> Used letters: " + usedLetters;
    document.getElementById("used").innerHTML = html2;

    if (guesses === 0) {
        legs = "||&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;\\";
        document.getElementById("myImg").src = "assets/images/full-body.gif";
        myFunction();
        // alert("Game over");
        let htmllose = "<p>The word was " + wordChoice;
        document.getElementById("lose").innerHTML = htmllose;
    }


    if (blankWord === wordChoice) {
        let htmlwin = "Congratulations!";
        myFunction();
        document.getElementById("win").innerHTML = htmlwin;
        // alert("You won!")
        // location.reload();
        //add play againhere
    }

}