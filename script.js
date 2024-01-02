

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

function randomNumber () {
    return Math.floor(Math.random() * 3) + 1;
}

console.log(getComputerChoice())
