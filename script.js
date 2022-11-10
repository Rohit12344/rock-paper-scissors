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

function game()
{
    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('button');

    const popup = document.querySelector('.pop-up');
    const winnerMsg = document.querySelector('.winner');
    const playAgainButton = document.querySelector('#play-again');

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

                if(playerScore === 5 || computerScore === 5)
                {
                    if(playerScore === 5)
                    {
                        winnerMsg.textContent = 'Congratulations, You won!';
                    }
                    else{
                        winnerMsg.textContent = 'Sorry, you lose. Computer won.';
                    }
                    body.style.cssText = 'margin: 0; height: 100%; overflow: hidden';
                    document.getElementById("overlay").style.display = "block";
                    let temp = window.scrollY + 25/100 * window.innerHeight;
                    let str = temp + 'px';
                    popup.style.transform = `translate(-50%, ${str})`;
                    popup.classList.add('transition');                   
                }
            }
        })});

    playAgainButton.addEventListener('click' , () => {
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        your_choice.textContent = '';
        computer_choice.textContent = '';
        popup.classList.remove('transition'); 
        document.getElementById("overlay").style.display = "none";
        body.style.removeProperty('margin');
        body.style.removeProperty('height');
        body.style.removeProperty('overflow');
    })
}

game();


