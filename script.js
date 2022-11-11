function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors.";
  }
}

function getPlayerChoice(e) {
  switch (e.target.className) {
    case "rock":
      playerChoice = "rock";
      break;
    case "paper":
      playerChoice = "paper";
      break;
    case "scissors":
      playerChoice = "scissors";
  }
  gameMessage.textContent = "";
  gameMessage.appendChild(div1).textContent = `You chose : ${playerChoice}`;
  gameMessage.appendChild(
    div2
  ).textContent = `Computer chose : ${computerChoice}`;
}

function decideWinner() {
  gameMessage.style.marginTop = "10px";
  if (message.substr(0, 8) === "You Win!") {
    playerScore++;
    gameMessage.parentNode.insertBefore(div3, gameMessage).textContent =
      "Game result :  You won.";
  } else if (message.substr(0, 9) == "You Lose!") {
    computerScore++;
    gameMessage.parentNode.insertBefore(div3, gameMessage).textContent =
      "Game result :  You lose.";
  } else {
    gameMessage.parentNode.insertBefore(div3, gameMessage).textContent =
      "Game result :  Tie.";
  }
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

function announceWinner() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      winnerMsg.textContent = "Congratulations, You won the game!";
    } else {
      winnerMsg.textContent = "Sorry, you lose. Computer won the game.";
    }
    body.style.cssText = " overflow: hidden";
    document.getElementById("overlay").style.display = "block";
    let temp = window.scrollY + (25 / 100) * window.innerHeight;
    let str = temp + "px";
    popup.style.transform = `translate(0%, ${str})`;
    popup.classList.add("transition");

    window.addEventListener("mouseup", function (event) {
      if (event.target !== popup && event.target !== winnerMsg) {
        popup.style.display = "none";
        popup.classList.remove("transition");
        document.getElementById("overlay").style.display = "none";
        body.style.overflow = "";
      }
    });

    buttons.forEach((btn) => {
      popup.style.display = "";
      btn.addEventListener("click", announceWinner);
    });
  }
}

function playGame(e) {
  if (playerScore !== 5 && computerScore !== 5) {
    window.scrollTo(0, 250);
    computerChoice = getComputerChoice();
    getPlayerChoice(e);
    message = playRound(playerChoice, computerChoice);
    decideWinner();
    announceWinner();
  }
}

function closePopUp() {
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
  gameMessage.removeChild(div1);
  gameMessage.removeChild(div2);
  gameMessage.textContent = "Best of luck!";
  popup.classList.remove("transition");
  document.getElementById("overlay").style.display = "none";
  body.style.removeProperty("margin");
  body.style.removeProperty("height");
  body.style.removeProperty("overflow");
  body.removeChild(div3);
  gameMessage.style.marginTop = "30px";
}

const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");

const popup = document.querySelector(".pop-up");
const winnerMsg = document.querySelector(".winner");
const playAgainButton = document.querySelector("#play-again");

const gameMessage = document.querySelector(".log");
const your_choice = document.querySelector(".yours");
const computer_choice = document.querySelector(".computers");

const pScore = document.querySelector(".your-score");
const cScore = document.querySelector(".computer-score");

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
div3.style.cssText =
  "font-size : 24px; font-weight: bold;margin: 16px 0; padding: 0";

let computerChoice, playerChoice;
let playerScore = 0,
  computerScore = 0;
let message;

buttons.forEach((btn) => {
  btn.addEventListener("click", playGame);
});

playAgainButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  window.scrollTo(0, 0);
  closePopUp();
});
