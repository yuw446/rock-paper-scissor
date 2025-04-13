// console.log("Hello World!");

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