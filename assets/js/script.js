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