function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function roundWinner(playerSelection, computerSelection) {
    //console.log(playerSelection);
    switch (true) {
        case (playerSelection == 'rock' && computerSelection == 'rock'):
            return "It's a tie!!";

        case (playerSelection == 'rock' && computerSelection == 'paper'):
            return "Computer Won";

        case (playerSelection == 'rock' && computerSelection == 'scissors'):
            return "You Won";

        case (playerSelection == 'paper' && computerSelection == 'paper'):
            return "It's a tie!!";

        case (playerSelection == 'paper' && computerSelection == 'scissors'):
            return "Computer Won";

        case (playerSelection == 'paper' && computerSelection == 'rock'):
            return "You Won";

        case (playerSelection == 'scissors' && computerSelection == 'scissors'):
            return "It's a tie!!";

        case (playerSelection == 'scissors' && computerSelection == 'rock'):
            return "Computer Won";

        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            return "You Won";
        case (playerSelection == 'invalid'):
            return "Invalid choice from user";

    }
}
let userWins = 0, computerWins = 0;
const options = document.querySelectorAll('.option');
options.forEach(el => el.addEventListener('click', (e) => game(e.target.id)));

function game(str) {
    let result, userInput = str;
    console.log(userInput);
    if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors') {
        userInput = userInput;
    }
    else { userInput = "invalid"; }
    result = roundWinner(userInput, computerPlay());
    const res_disp = document.querySelector('footer>h1');
    res_disp.textContent = result;
    if (result === "Computer Won") { computerWins += 1; }
    else if (result === "You Won") { userWins += 1; }
    const user_score = document.querySelector(".user-score");
    const comp_score = document.querySelector(".comp-score");
    user_score.textContent = userWins;
    comp_score.textContent = computerWins;
    if (userWins == 5) {
        res_disp.textContent = "Hooray!! You won the entire game :)";
        reloadPage();
    }
    if (computerWins == 5) {
        res_disp.textContent = "Computer won the entire game :( Try again...";
        reloadPage();
    }

}
function reloadPage() {
    setTimeout(() => {
        document.location.reload()
    }, 500)
}




