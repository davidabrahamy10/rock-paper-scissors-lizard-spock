/**
 * Declare constants for DOM elements
 * and possible choices
 */
const messages = document.getElementById("choice-messages");
const buttons = document.getElementsByTagName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/** Waits for the DOM to load before running the game
 * and adds eventlisteners to the buttons.
 */
document.addEventListener("DOMContentLoaded", function() {

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-choice") === "0") {
                .innerHTML = "You chose Rock!";
            } else {
                let playerChoice = this.getAttribute("data-choice");
                alert(`You chose ${playerChoice}`);
            }
        })
    }
})

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 5);
}