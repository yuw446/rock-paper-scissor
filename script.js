// console.log("Hello World!");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.round(Math.random() * 2)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    switch (prompt("Please enter your choice: ").toUpperCase()) {
        case "ROCK":
            return "rock";
        case "PAPER":
            return "paper";
        case "SCISSORS":
            return "scissors"
        default:
            console.log("Please input either rock, paper or scissors.");
            return getHumanChoice();
    }
}

function announceWinner(winner) {
    if (winner === "")
        console.log("Its a tie this round");
    else 
        console.log(`${winner} wins this round`);
}

function playRound(humanChoice, computerChoice) {
    let computer = "Computer";
    let human = "Human";
    let winner = "";    
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                winner = computer;
                computerScore++;
            } else if (computerChoice === "scissors") {
                winner = human;
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                winner = computer;
                computerScore++;
            } else if (computerChoice === "rock") {
                winner = human;
                humanScore++;
            }
        case "scissors":
            if (computerChoice === "rock") {
                winner = computer;
                computerScore++;
            } else if (computerChoice === "paper") {
                winner = human;
                humanScore++;
            }
    }
    announceWinner(winner);
}

function playGame() {
    for (let i = 0; i < 5; i ++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore)
        console.log("Human won the game!!");
    else if (humanScore < computerScore)
        console.log("Computer won the game!!");
    else
        console.log("The game is a tie!!!");
}

playGame();