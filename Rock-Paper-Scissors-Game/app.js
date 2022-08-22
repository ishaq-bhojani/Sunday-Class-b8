
var options = ["Rock", "Paper", "Scissors"];

function startGame () {
  var startGameContainer = document.getElementById("start-game");
  var userChoiceContainer = document.getElementById("user-choice-buttons");
  var textResult = document.getElementById("text-result");
  startGameContainer.style.display = "none";
  userChoiceContainer.style.display = "block";
  textResult.style.display = "none";
}

function userSelected (userChoice) {
  var computerChoice = computerSelected();
  var textResult = document.getElementById("text-result");
  if (userChoice === computerChoice) {
    textResult.innerText = "Draw";
  } else if (userChoice === options[0] && computerChoice === options[1]
    || userChoice === options[1] && computerChoice === options[2]
    || userChoice === options[2] && computerChoice === options[0]) {
    textResult.innerText = "Computer Winner " + computerChoice;
  }  else {
    textResult.innerText = "User Winner " + computerChoice;
  }
  var startGameContainer = document.getElementById("start-game");
  var userChoiceContainer = document.getElementById("user-choice-buttons");
  textResult.style.display = "block";
  startGameContainer.style.display = "block";
  userChoiceContainer.style.display = "none";
}

function computerSelected () {
  var random = Math.random(); // 0.222 // 0.444 /// 0.67
  if (random < 0.34) {
    return options[0];
  } else if (random < 0.67) {
    return options[1];
  } else {
    return options[2];
  }
}