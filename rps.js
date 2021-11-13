function playRound(playerSelection) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);
    const roundResult = document.querySelector('#round-result');

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

    const result = possibleOutcomes[computerIndex][playerIndex];
    roundResult.textContent = resultMessages[result];

    return result;
}

function game() {
    let runningScore = {
        'player': 0,
        'computer': 0,
    };

    const playerScore = document.querySelector("#player");
    const computerScore = document.querySelector("#computer");
    const gameResult = document.querySelector('#game-result');

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', () => {
        if(gameResult.textContent !== "") return;
        const result = playRound(button.id);

        // Check for player or computer win, update points
        if(result === "p") {
            runningScore.player += 1;
            playerScore.textContent = `Player: ${runningScore.player}`;
        }
        if(result === "c") {
            runningScore.computer += 1;
            computerScore.textContent = `Computer: ${runningScore.computer}`;
        }

        // Check for a win after every click
        if(runningScore.player === 5) {
            gameResult.textContent = "Game result: Player Wins!"; 
        }
        if(runningScore.computer === 5) {
            gameResult.textContent = "Game result: Computer Wins!"; 
        }
    }));
}

game();
