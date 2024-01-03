let winner = "";
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let random_number = randomNumber();
    let computerChoice = ""

    if (random_number === 1) {
        computerChoice = "paper";
    } else if (random_number === 2) {
        computerChoice = "scissor";
    } else if (random_number === 3) {
        computerChoice = "rock";
    }

    return computerChoice;
}