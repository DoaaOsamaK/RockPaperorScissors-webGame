const options = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
