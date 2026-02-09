function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt(
        'Choose your object:\n' +
        'Enter 1 for rock\n' +
        'Enter 2 for paper\n' +
        'Enter 3 for scissors'));
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(computerChoice, humanChoice) {
        if(computerChoice === 1) {
            if (humanChoice === 1) {
                console.log('Tie round!');
            }
            else if (humanChoice === 2) {
                console.log('You win this round! Paper beats rock.');
                humanScore++;
            }
            else if (humanChoice === 3) {
                console.log('You lose this round! Rock beats scissors');
                computerScore++;
            }
        }
        if (computerChoice === 2) {
            if (humanChoice === 1) {
                console.log('You lose this round! Paper beats rock.');
                computerScore++;
            }
            else if (humanChoice === 2) {
                console.log('Tie round!');
            }
            else if (humanChoice === 3) {
                console.log('You win this round! Scissors beats paper.');
                humanScore++;
            }
        }
        if (computerChoice === 3) {
            if (humanChoice === 1) {
                console.log('You win this round! Rock beats scissors.');
                humanScore++;
            }
            else if (humanChoice === 2) {
                console.log('You lose this round! Scissors beats paper');
                computerScore++;
            }
            else if (humanChoice === 3) {
                console.log('Tie round!');
            }
        }
    }
    for (i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    console.log(
        `Computer score: ${computerScore}\n` +
        `Human score: ${humanScore}`
    );
    if (computerScore === humanScore) {
        console.log('Tie game!');
    }
    else if (computerScore > humanScore) {
        console.log('You lose the game!');
    }
    else {
        console.log('You win the game!');
    }
}

playGame();