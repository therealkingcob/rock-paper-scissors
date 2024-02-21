let winner = "";
let playerWins = 0;
let computerWins = 0;
let playerChoice = "";


//return a string that is the computers choice
function getComputerChoice() {
    let random_number = randomNumber();
    let computerChoice = "";

    if (random_number === 0     ) {
        computerChoice = "paper";
    } else if (random_number === 1) {
        computerChoice = "scissor";
    } else if (random_number === 2) {
        computerChoice = "rock";
    }
    return computerChoice;
}

function randomNumber() {
    return Math.floor(Math.random() * 3); //randomly return 0, 1, 2
}


function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        game()
    } else if (playerSelection === "rock" && computerChoice === "scissor" || playerSelection === "paper" && computerChoice === "rock" || playerSelection === "scissor" && computerChoice === "paper") {
        playerWins++;
        game()
    } else if (playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissor" || playerSelection === "scissor" && computerChoice === "rock") {
        computerWins++;
        game()
    }
}



function game() { 
        if (playerWins > computerWins) {
            console.log("Player is winning by " + (playerWins-computerWins) + " wins" + ". Player has " + (playerWins))
        } else if (computerWins > playerWins) {
            console.log("Computer is winning by " + (computerWins-playerWins) + " wins" + ". Computer has " + (computerWins))
        } else {
            console.log("The game is tied with " + playerWins)
        }
    
}





