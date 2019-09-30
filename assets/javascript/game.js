let words = ["hello", "door", "popsicle", "carpet", "burger", "pants", "code", "magic", "elephant", "horse", "whale", "laundry", "television", "school", "tennis", "baseball", "gymnastics"]
let usedLetters = " ";
let correctGuesses = " ";
let guesses = 6;
let completeWord = " ";
let fourLW = "____";
let fiveLW = "_____";
let sixLW = "______";
let sevenLW = "_______";
let eightLW = "________";
let nineLW = "________";
let tenLW = "________";

// Computer picks a word //
let wordChoice = words[Math.floor(Math.random()*words.length)]
    console.log(wordChoice);
let blankWord = "__________";
    if (wordChoice.length == 4) {
        blankWord = fourLW;
    }
    else if (wordChoice.length === 5) {
        blankWord = fiveLW;
    }
    else if (wordChoice.length === 6) {
        blankWord = sixLW;
    }
    else if (wordChoice.length === 7) {
        blankWord = sevenLW;
    }
    else if (wordChoice.length === 8) {
        blankWord = eightLW;
    }
    else if (wordChoice.length === 8) {
        blankWord = nineLW;
    }
    else {
        blankWord = tentLW;
    }
    
let letterUpdate = blankWord;

    // console.log(blankWord);
// Press any key to begin

// User starts guessing letters
document.onkeyup = function() {
  
    // As user guesses, check to see if any letters match. ßFill in correct letters or list used letters
    let letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // determines what position the guessed letter is in //
    let letterPosition = wordChoice.indexOf(letterGuess);
        // console.log("Letter position:", letterPosition);
    let letterPosition2 = wordChoice.indexOf(letterGuess, letterPosition + 1);
        // console.log ("Does it appear more than once:", letterPosition2);

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
        console.log(blankWord);
        correctGuesses += letterGuess;
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
        // if no more guesses remaining //
        if (guesses === 0) {
            alert("Game over");
            let lose = "<p>The word was " + wordChoice;
            document.querySelector("#lose").innerHTML = lose;
        }
    }

            
// Tell them they win when they fill in word correctly


// display html //

    console.log(blankWord);
    let html = "<p>Press any key to begin." +
    "<p>This word contains " + wordChoice.length + " letters" +
    "<p>" + blankWord +
    // "<p> Correct guesses:" + correctGuesses +
    "<p> Used letters: " + usedLetters +
    "<p> Guesses remaining: " + guesses;

    document.querySelector('#game').innerHTML = html;

    if (blankWord === wordChoice) {
        alert("You won!")
    }


}


