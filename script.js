function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 0)
    {
        return 'rock';
    }
    else if(randomNumber === 1)
    {
        return 'paper';
    }
    else if(randomNumber === 2)
    {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection)
    {
        return 'Draw!';
    }
    if(playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return "You Win! Scissors beats Paper.";
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock')
    {
        return "You Win! Paper beats Rock.";
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors')
    {
        return "You Win! Rock beats Scissors.";
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors')
    {
        return "You Lose! Scissors beats Paper.";
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper')
    {
        return "You Lose! Paper beats Rock.";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock')
    {
        return "You Lose! Rock beats Scissors.";
    }
}

function decideWinner(playerScore, computerScore)
{
    if(playerScore === 5)
    {

        console.log('Congratulations! You won.');
    }
    else if(computerScore === 5)
    {
        console.log('Sorry, you lose. Computer won.');
    }
}

function game()
{
    const buttons = document.querySelectorAll('button');

    const your_choice = document.querySelector('.yours');
    const computer_choice = document.querySelector('.computers');

    const pScore = document.querySelector('.your-score');
    const cScore = document.querySelector('.computer-score');

    let computerChoice,playerChoice;
    let playerScore = 0, computerScore = 0;
    let message;

    buttons.forEach((btn) =>
    {
        btn.addEventListener('click' ,(e) =>
        {
            if(playerScore !== 5 && computerScore !== 5)
            {
                computerChoice = getComputerChoice();
                message = playRound('rock',computerChoice);

                switch(e.target.className)
                {
                    case 'rock':
                        playerChoice = 'rock';
                        break;
                    case 'paper':
                        playerChoice = 'paper';
                        break;
                    case 'scissors':
                        playerChoice = 'scissors';             
                }

                your_choice.textContent = playerChoice;
                computer_choice.textContent = computerChoice;

                if(message.substr(0,8) === "You Win!")
                {
                    playerScore++;
                }
                else if(message.substr(0,9) == 'You Lose!')
                {
                    computerScore++;
                }
                pScore.textContent = playerScore;
                cScore.textContent = computerScore;
            }

            decideWinner(playerScore,computerScore);

        })});   

}

game();


