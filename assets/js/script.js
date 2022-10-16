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
         //If the computer wins
     } else if (computerChoice == "rock" && playerChoice == "lizard") {
         messages.innerHTML = "You LOSE! Rock crushes Lizard.";
         updateScore("computer");
     } else if (computerChoice == "rock" && playerChoice == "lizard") {
         messages.innerHTML = "You LOSE! Rock crushes Lizard.";
         updateScore("computer");
     } else if (computerChoice == "paper" && playerChoice == "rock") {
         messages.innerHTML = "You LOSE! Paper covers Rock.";
         updateScore("computer");
     } else if (computerChoice == "paper" && playerChoice == "spock") {
         messages.innerHTML = "You LOSE! Paper disproves Spock.";
         updateScore("computer");
     } else if (computerChoice == "scissors" && playerChoice == "lizard") {
         messages.innerHTML = "You LOSE! Scissors decapitates Lizard.";
         updateScore("computer");
     } else if (computerChoice == "scissors" && playerChoice == "paper") {
         messages.innerHTML = "You LOSE! Scissors cuts Paper.";
         updateScore("computer");
     } else if (computerChoice == "lizard" && playerChoice == "spock") {
         messages.innerHTML = "You LOSE! Lizard poisons Spock.";
         updateScore("computer");
     } else if (computerChoice == "lizard" && playerChoice == "paper") {
         messages.innerHTML = "You LOSE! Lizard eats Paper.";
         updateScore("computer");
     } else if (computerChoice == "spock" && playerChoice == "scissors") {
         messages.innerHTML = "You LOSE! Spock smashes Scissors.";
         updateScore("computer");
     } else if (computerChoice == "spock" && playerChoice == "rock") {
         messages.innerHTML = "You LOSE! Spock vaporizes Rock.";
         updateScore("computer");
     } else {
         messages.innerHTML = "ITS A DRAW!"
         updateScore("draw");
     }
 }
 
 function updateScore(outcome) {
     if (outcome === "player") {
         playerScore++;
         playerScoreSpan.innerHTML = playerScore;
     } else if (outcome === "computer") {
         computerScore++;
         computerScoreSpan.innerHTML = computerScore;
     } else if (outcome === "draw"){
         drawScore++;
         drawScoreSpan.innerHTML = drawScore;
     } winGame(playerScore);
 }
 
 function resetScore() {
     playerScore = 0;
     computerScore = 0;
     drawScore = 0;
     playerScoreSpan.innerHTML = 0;
     computerScoreSpan.innerHTML = 0;
     drawScoreSpan.innerHTML = 0;
 }
 
 function winGame() {
     if (playerScore == 10) {
         messages.innerHTML = "WELL DONE! YOU WON THE GAME!"
         resetScore();
     } else if (computerScore == 10){
         messages.innerHTML = "OH NO! COMPUTER WON THE GAME!"
         resetScore();
     }
 }