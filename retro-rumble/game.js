//------------------------------State--------------------------
let userScore = 0;
let computerScore = 0;

//----------------------------DOM Elements--------------------------
const resultMessage = document.getElementById("result");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");
const gameBtns = document.querySelectorAll(".retro-btn[data-choice]"); // only R/P/S
const resetBtn = document.getElementById("reset-btn");

//---------------------------------helper functions-------------------------------
function getCompChoice() {
  let rdmOutPut = Math.random();
  if (rdmOutPut < 1 / 3) return "rock";
  else if (rdmOutPut < 2 / 3) return "paper";
  else return "scissors";
}

function updateScore() {
  userScoreDisplay.innerText = userScore;
  computerScoreDisplay.innerText = computerScore;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateScore();
  document.getElementById("msg").style.display = "block";
  document.getElementById("Score-board").style.display = "none";
  resultMessage.innerText = "";
}

function playRound(userChoice) {
  let compChoice = getCompChoice();

  // hide start msg, show scoreboard
  document.getElementById("msg").style.display = "none";
  document.getElementById("Score-board").style.display = "block";

  if (
    (compChoice === "rock" && userChoice === "paper") ||
    (compChoice === "paper" && userChoice === "scissors") ||
    (compChoice === "scissors" && userChoice === "rock")
  ) {
    resultMessage.innerText = `Computer chose ${compChoice}: You Win!`;
    userScore++;
    updateScore();
  } else if (compChoice === userChoice) {
    resultMessage.innerText = `Computer chose ${compChoice}: It's a Draw`;
  } else {
    resultMessage.innerText = `Computer chose ${compChoice}: You Lose`;
    computerScore++;
    updateScore();
  }
}

//----------------------------Event listeners--------------------------
// Game buttons (Rock / Paper / Scissors)
for (let btn of gameBtns) {
  btn.addEventListener("click", function () {
    playRound(btn.dataset.choice);
  });
}

// Reset button
resetBtn.addEventListener("click", resetGame);




