let words = ["hello", "dog", "popsicle"]
let usedLetters = " ";
let correctGuesses = " ";
let guesses = 6;
let completeWord = " ";

// Computer picks a word
let wordChoice = words[Math.floor(Math.random()*words.length)]
let answer = 

// Press any key to begin

// User starts guessing letters
document.onkeyup = function() {



  
    // As user guesses, check to see if any letters match. ßFill in correct letters or list used letters
    let letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

    let letterPosition = wordChoice.indexOf(letterGuess);
        console.log(letterPosition)
        
        // if user guesses incorrectly //
        if (letterPosition < 0) {
            usedLetters += letterGuess;
            guesses -= 1;
        }
        else if (letterPosition >=0) {
            correctGuesses += letterGuess;
        }

    




// Tell them they win when they fill in word correctly


    // Generate the unsccores disignating word length, tell user to begin guessing
    let character = '_ ';
    let blankWord = character.repeat(wordChoice.length);
    let html = "<p>Press any key to begin." +
    "<p>This word contains " + wordChoice.length + " letters" +
    "<p>" + blankWord +
    "<p> Correct guesses:" + correctGuesses +
    "<p> Used letters: " + usedLetters +
    "<p> Guesses remaining: " + guesses;


    document.querySelector('#game').innerHTML = html;


}


