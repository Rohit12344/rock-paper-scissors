function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 0)
    {
        return 'Rock';
    }
    else if(randomNumber === 1)
    {
        return 'Paper';
    }
    else if(randomNumber === 2)
    {
        return 'Scissors';
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
    if(playerScore === computerScore)
    {
        console.log('Draw! No winner');
    }
    else if(playerScore > computerScore)
    {
        console.log('Congratulations! You won.');
    }
    else
    {
        console.log('Sorry, you lose. Computer won.');
    }
}

function game()
{
    const rock_btn = document.querySelector('.rock');
    const paper_btn = document.querySelector('.paper');
    const scissors_btn = document.querySelector('.scissors');

    rock_btn.addEventListener('click' , playRound('rock',getComputerChoice));
    paper_btn.addEventListener('click' , playRound('paper',getComputerChoice));
    scissors_btn.addEventListener('click' , playRound('scissors',getComputerChoice));
    /*
    let playerSelection, computerSelection;
    let playerScore = 0, computerScore = 0;
    let message;

    for(let i = 0; i < 5; i++)
    {
        playerSelection = prompt('Rock, Paper or Scissors? Enter below: ');
        computerSelection = getComputerChoice();

        message = playRound(playerSelection,computerSelection);

        if(message.substr(0,8) === "You Win!")
        {
            playerScore++;
        }
        else if(message.substr(0,9) == 'You Lose!')
        {
            computerScore++;
        }

        console.log(message);
    }

    decideWinner(playerScore,computerScore);*/
}

game();


