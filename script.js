document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('#choices button');
    const userChoiceElement = document.getElementById('userChoice');
    const computerChoiceElement = document.getElementById('computerChoice');
    const gameResultElement = document.getElementById('gameResult');
    const resetBtn = document.getElementById('resetBtn');
    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');

    let playerScore = 0;
    let computerScore = 0;

    const choicesArray = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        return choicesArray[Math.floor(Math.random() * choicesArray.length)];
    }

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "draw";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerScore++;
            return "win";
        } else {
            computerScore++;
            return "lose";
        }
    }

    function updateScore() {
        playerScoreElement.textContent = `Player: ${playerScore}`;
        computerScoreElement.textContent = `Computer: ${computerScore}`;
    }

    function displayResult(result) {
        if (result === "win") {
            gameResultElement.textContent = "You win! 🎉";
            gameResultElement.className = "win-message";
        } else if (result === "lose") {
            gameResultElement.textContent = "You lose! 💀";
            gameResultElement.className = "lose-message";
        } else {
            gameResultElement.textContent = "It's a draw!";
            gameResultElement.className = "draw-message";
        }
    }

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('data-choice');
            const computerChoice = getComputerChoice();

            userChoiceElement.textContent = `You chose: ${userChoice}`;
            computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;

            const result = getResult(userChoice, computerChoice);
            displayResult(result);

            updateScore();
        });
    });

    resetBtn.addEventListener('click', () => {
        userChoiceElement.textContent = '';
        computerChoiceElement.textContent = '';
        gameResultElement.textContent = '';
        playerScore = 0;
        computerScore = 0;
        updateScore();
        gameResultElement.className = "";
    });
});
