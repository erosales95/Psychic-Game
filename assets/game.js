var wins = 0;
var losses = 0;
var userGuessesLeft = 9;
var userWrongGuess = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("The computer chose: " + computerGuess);
console.log("Wins: " + wins)
console.log("Losses: " + losses)


document.onkeypress = function (event) {
    var userGuess = event.key;
    userGuess.toLowerCase();
    for (var i = 0; i < letters.length; i++) {

        if (userWrongGuess[i] == userGuess) {
            alert("You already chose that letter");
            return;
        }

    }
    if (userGuess != "a" && userGuess != "b" && userGuess != "c" && userGuess != "d" && userGuess != "e" && userGuess != "f" && userGuess != "g" && userGuess != "h" && userGuess != "i" && userGuess != "j" && userGuess != "k" && userGuess != "l" && userGuess != "m" && userGuess != "n" && userGuess != "o" && userGuess != "p" && userGuess != "q" && userGuess != "r" && userGuess != "s" && userGuess != "t" && userGuess != "u" && userGuess != "v" && userGuess != "w" && userGuess != "x" && userGuess != "y" && userGuess != "z") {
        alert("Please pick a lower case letter.");
        return;
    }

    if (userGuess === computerGuess) {
        wins++;
        userGuessesLeft = 9;
        userWrongGuess = [];
        alert("You Win! The correct letter was "+ computerGuess + ".");
        alert("Click OK to play again.");
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("You Win!")
        console.log("Wins: " + wins)
        console.log("Losses: " + losses)
        console.log("The next computer guess is: " + computerGuess + ".");

    } else {
        userGuess.toLowerCase();
        userGuessesLeft--;
        userWrongGuess.push(userGuess);


    }
    if (userGuessesLeft === 0) {
        userGuess.toLowerCase();
        losses++;
        userGuessesLeft = 9;
        userWrongGuess = [];
        alert("You Lose! The computer chose " + computerGuess + ".");
        alert("Click OK to try again.");
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("You Lose!")
        console.log("Wins: " + wins)
        console.log("Losses: " + losses)
        console.log("The next computer guess is: " + computerGuess + ".");
    };
    

    var html =             
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + userGuessesLeft + "</p>" +
    "<p>Your guesses so far: " + userWrongGuess + "</p>";

    document.querySelector("#game").innerHTML = html;

}