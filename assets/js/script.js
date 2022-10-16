/**
 * Declare constants for DOM elements
 * and possible choices
 */
 const messages = document.getElementById("choice-message");
 const buttons = document.getElementsByClassName("control-btn");
 const playerScoreSpan = document.getElementById("player-score");
 const computerScoreSpan = document.getElementById("computer-score");
 const drawScoreSpan = document.getElementById("draw-score");
 const choices = ["rock", "paper", "scissors", "lizard", "spock"];
 const resetButton = document.getElementById("reset-btn");
 
 let playerScore = 0;
 let computerScore = 0;
 let drawScore = 0;

/** Waits for the DOM to load before running the game
 * and adds eventlisteners to the buttons.
 */

 document.addEventListener("DOMContentLoaded", function () {
    resetButton.addEventListener("click", resetScore);
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            playGame(playerChoice);
            buttonColor(this);
        })
    }
})

function buttonColor(element) {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.classList.remove("filter-green");
    }
    element.classList.add("filter-green");
    console.log(element);
}
 /**
  * 
  */
  function playGame(playerChoice) {
 
    document.getElementById("player-image").src = `assets/images/${playerChoice}.svg`;
    document.getElementById("player-image").alt = choices[playerChoice];

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("computer-image").src = `assets/images/${computerChoice}.svg`;
    document.getElementById("computer-image").alt = choices[computerChoice];

    checkWinner(playerChoice, computerChoice);
}

function checkWinner(playerChoice, computerChoice) {
     
    if (playerChoice == "rock" && computerChoice == "scissors") {
        messages.innerHTML = "You WON! Rock crushes Scissors.";
        updateScore("player");
    } else if (playerChoice == "rock" && computerChoice == "lizard") {
        messages.innerHTML = "You WON! Rock crushes Lizard.";
        updateScore("player");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        messages.innerHTML = "You WON! Paper covers Rock.";
        updateScore("player");
    } else if (playerChoice == "paper" && computerChoice == "spock") {
        messages.innerHTML = "You WON! Paper disproves Spock.";
        updateScore("player");
    } else if (playerChoice == "scissors" && computerChoice == "lizard") {
        messages.innerHTML = "You WON! Scissors decapitates Lizard.";
        updateScore("player");
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        messages.innerHTML = "You WON! Scissors cuts Paper.";
        updateScore("player");
    } else if (playerChoice == "lizard" && computerChoice == "spock") {
        messages.innerHTML = "You WON! Lizard poisons Spock.";
        updateScore("player");
    } else if (playerChoice == "lizard" && computerChoice == "paper") {
        messages.innerHTML = "You WON! Lizard eats Paper.";
        updateScore("player");
    } else if (playerChoice == "spock" && computerChoice == "scissors") {
        messages.innerHTML = "You WON! Spock smashes Scissors.";
        updateScore("player");
    } else if (playerChoice == "spock" && computerChoice == "rock") {
        messages.innerHTML = "You WON! Spock vaporizes Rock.";
        updateScore("player");