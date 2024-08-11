document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('#choices button');
    const userChoiceElement = document.getElementById('userChoice');
    const computerChoiceElement = document.getElementById('computerChoice');
    const gameResultElement = document.getElementById('gameResult');
    const resetBtn = document.getElementById('resetBtn');

    const choicesArray = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        return choicesArray[Math.floor(Math.random() * choicesArray.length)];
    }

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a draw!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return "You win! 🎉";
        } else {
            return "You lose! 💀";
        }
    }

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('data-choice');
            const computerChoice = getComputerChoice();

            userChoiceElement.textContent = `You chose: ${userChoice}`;
            computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;
            gameResultElement.textContent = getResult(userChoice, computerChoice);
        });
    });

    resetBtn.addEventListener('click', () => {
        userChoiceElement.textContent = '';
        computerChoiceElement.textContent = '';
        gameResultElement.textContent = '';
    });
});
