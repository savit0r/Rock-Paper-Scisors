const message = document.getElementById('message');

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click',() => playGame('scissors'));

function playGame(playerChoice){
    const choice = ['rock', 'paper', 'scissors'];
    const computerChoice = choice[Math.floor(Math.random()*3)];

    if(playerChoice == computerChoice){
        message.textContent = `it's a tie! Both chose ${playerChoice}.`;
    }
    else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ){
        message.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    }
    else{
        message.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}