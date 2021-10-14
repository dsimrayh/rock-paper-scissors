const choices = ['Rock', 'Paper', 'Scissors'];
const randomChoice = () => Math.floor(Math.random() * 3);

function capitalize(selection) {
    const lower = selection.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function computerPlay() {
    return choices[randomChoice()];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);

    const possibleOutcomes = [
        ['t', 'p', 'c'],
        ['c', 't', 'p'],
        ['p', 'c', 't'],
    ];

    const resultMessages = {
        "t": "It's a Tie!",
        "p": `You win! ${playerSelection} beats ${computerSelection}`,
        "c": `You lose! ${computerSelection} beats ${playerSelection}`,
    }

    const roundResult = possibleOutcomes[computerIndex][playerIndex];
    console.log(resultMessages[roundResult]);

    return roundResult
}

function game() {
    let currentRound = 1;
    let playerScore = 0;
    let computerScore = 0;

    while(currentRound <= 5) {
        const userInput = prompt("Rock, Paper, or Scissors?");
        const result = playRound(userInput, computerPlay());
        if(result === "p") playerScore++;
        if(result === "c") computerScore++;
        currentRound++;
    }

    if(playerScore === computerScore) return "Game result: Tie";
    if(playerScore > computerScore) return "Game result: Player Wins!"
    return "Game result: Computer Wins!"
}

console.log(game());
