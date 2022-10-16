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

 document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-choice") === "0") {
                alert("You chose rock!");
            } else {
                let playerChoice = this.getAttribute("data-choice");
                alert(`You chose ${playerChoice}`);
            }
        })
    }
})