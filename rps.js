const choices = ['Rock', 'Paper', 'Scissors'];

const randomChoice = () => Math.floor(Math.random() * 3);

const computerPlay = () => choices[randomChoice()];

const capitalize = selection => {
    const lower = selection.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
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
    let runningScore = {
        'player': 0,
        'computer': 0,
    };

    const playerScore = document.querySelector("#player");
    const computerScore = document.querySelector("#computer");
    const gameResult = document.querySelector('#result');

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        if(result === "p") {
            runningScore.player += 1;
            playerScore.textContent = `Player: ${runningScore.player}`;
        }
        if(result === "c") {
            runningScore.computer += 1;
            computerScore.textContent = `Computer: ${runningScore.computer}`;
        }

        const scores = Object.values(runningScore);
        if(scores.some(score => score === 5)) {
            if(runningScore.player === runningScore.computer) {
                gameResult.textContent = "Game result: Tie"; 
                return
            }
            if(runningScore.player > runningScore.computer) {
                gameResult.textContent = "Game result: Player Wins!"; 
                return
            }
            gameResult.textContent = "Game result: Computer Wins!";
        }
    }));
}

game();




