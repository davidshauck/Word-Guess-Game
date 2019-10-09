let words = ["hello", "door", "popsicle", "carpet", "burger", "pants", "code", "magic", "elephant", "horse", "whale", "laundry", "television", "school", "breakfast", "table", "cups", "tennis", "baseball", "gymnastics"]
let usedLetters = "";
let guesses = 6;
let correctGuesses = "";
let completeWord = "";
let blankWord = "";
let html = "";
let html2 = "";
let letterUpdate = "";
let wordChoice = words[Math.floor(Math.random()*words.length)]

function myFunction() {
// Computer picks a word //
wordChoice = words[Math.floor(Math.random()*words.length)]

// reset blankWord & completeWord on re-play
blankword = "";
completeWord = "";

// generates blank word field //
for (let i = 0; i < wordChoice.length; i++) {
    blankWord = blankWord + "_";
}
// sets letterUpdate to be empty at start
letterUpdate = blankWord;

// set blank display and empty scaffold before first guess
    if (guesses === 6) {
    document.getElementById("myImg").src = "assets/images/scaffold.gif";
    html = "<p>" + blankWord;
    document.getElementById("display").innerHTML = html;
    html2 = "<p> Used letters: " + usedLetters;
    document.getElementById("used").innerHTML = html2;
    }
    else {
    html = "<p>" + blankWord;
    document.getElementById("display").innerHTML = html;
    html2 = "<p> Used letters: " + usedLetters;
    document.getElementById("used").innerHTML = html2;
    }
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
    // elimates non-letters from selection //
    else if (e.keyCode < 65 || e.keyCode > 90) {
        alert("That's not a valid selection");
    }
    //  if letter has been guessed //
    else if (inUsedLetters || inCorrectGuesses) {
        alert("You've already used that letter");
    }
    // if letter is not in word and hasn't been guessed //
    else {
        usedLetters += letterGuess;
        // reduce guesses by 1 //
        guesses -= 1;
        // update image based on how many guesses remain //
        if (guesses === 5) {
            document.getElementById("myImg").src = "assets/images/head.gif";
        }
        if (guesses === 4) {
            document.getElementById("myImg").src = "assets/images/torso.gif";
        }
        if (guesses === 3) {
            document.getElementById("myImg").src = "assets/images/one-arm.gif";
        }
        if (guesses === 2) {
            document.getElementById("myImg").src = "assets/images/two-arms.gif";
        }
        if (guesses === 1) {
            document.getElementById("myImg").src = "assets/images/one-leg.gif";
        }
    }

// display html //
    let html = "<p>" + blankWord;
    document.getElementById("display").innerHTML = html;
    let html2 = "<p> Used letters: " + usedLetters;
    document.getElementById("used").innerHTML = html2;

    if (guesses === 0) {
        document.getElementById("myImg").src = "assets/images/full-body.gif";
        let htmllose = "<p>The word was " + wordChoice;
        let again = "(Refresh page to play again)";
        document.getElementById("lose").innerHTML = htmllose;
    }

    if (blankWord === wordChoice) {
        let htmlwin = "Congratulations!";
        let again = "(Refresh page to play again)";
        document.getElementById("win").innerHTML = htmlwin;
    }

    // clear variables & fields on re-play
    $(".operator").click(function(){
        guesses = 6;
        usedLetters = "";
        correctGuesses = "";
        completeWord = "";
        blankWord = "";
        wordChoice = "";
        html = "";
        html2 = "";
        letterUpdate = "";
        
        $("#used, #win, #lose, #result, #again").empty();
    
        myFunction();
    });

}