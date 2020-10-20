var yourChoice,
  botChoice,
  botChoiceNo,
  choices,
  yourChoiceDOM,
  botChoiceDOM,
  rockBtn,
  paperBtn,
  scissorsBtn,
  result,
  winner,
  resultArea,
  player1Area,
  player2Area,
  wins1,
  draws1,
  loses1,
  wins2,
  draws2,
  loses2,
  yourWins,
  yourDraws,
  yourLoses,
  botWins,
  botDraws,
  botLoses,
  gamePlaying;

yourWins = 0;
yourLoses = 0;
yourDraws = 0;

botWins = 0;
botLoses = 0;
botDraws = 0;

init();

rockBtn.addEventListener("click", function () {
  if (gamePlaying) {
    if (botChoice === "paper") {
      result = "You Lost!";
      winner = "bot";
    } else if (botChoice === "scissors") {
      result = "You Won!";
      winner = "you";
    } else {
      result = "You Tied!";
      winner = "none";
    }

    resultArea.textContent = result;
    player1Area.textContent = "rock";
    player2Area.textContent = botChoice;

    if (result === "You Won!") {
      yourWins += 1;
      botLoses += 1;
      wins1.textContent = yourWins;
      loses2.textContent = botLoses;
    } else if (result === "You Lost!") {
      yourLoses += 1;
      botWins += 1;
      loses1.textContent = yourLoses;
      wins2.textContent = botWins;
    } else {
      yourDraws += 1;
      botDraws += 1;
      draws1.textContent = yourDraws;
      draws2.textContent = botDraws;
    }
    gamePlaying = false;
  }
});

paperBtn.addEventListener("click", function () {
  if (gamePlaying) {
    if (botChoice === "rock") {
      result = "You Won!";
      winner = "you";
    } else if (botChoice === "scissors") {
      result = "You Lost!";
      winner = "bot";
    } else {
      result = "You Tied";
      winner = "none";
    }

    resultArea.textContent = result;
    player1Area.textContent = "paper";
    player2Area.textContent = botChoice;

    if (result === "You Won!") {
      yourWins += 1;
      botLoses += 1;
      wins1.textContent = yourWins;
      loses2.textContent = botLoses;
    } else if (result === "You Lost!") {
      yourLoses += 1;
      botWins += 1;
      loses1.textContent = yourLoses;
      wins2.textContent = botWins;
    } else {
      yourDraws += 1;
      botDraws += 1;
      draws1.textContent = yourDraws;
      draws2.textContent = botDraws;
    }
    gamePlaying = false;
  }
});

scissorsBtn.addEventListener("click", function () {
  if (gamePlaying) {
    if (botChoice === "rock") {
      result = "You Lost!";
      winner = "bot";
    } else if (botChoice === "paper") {
      result = "You Won!";
      winner = "you";
    } else {
      result = "You Tied";
      winner = "none";
    }

    resultArea.textContent = result;
    player1Area.textContent = "scissors";
    player2Area.textContent = botChoice;

    if (result === "You Won!") {
      yourWins += 1;
      botLoses += 1;
      wins1.textContent = yourWins;
      loses2.textContent = botLoses;
    } else if (result === "You Lost!") {
      yourLoses += 1;
      botWins += 1;
      loses1.textContent = yourLoses;
      wins2.textContent = botWins;
    } else {
      yourDraws += 1;
      botDraws += 1;
      draws1.textContent = yourDraws;
      draws2.textContent = botDraws;
    }
    gamePlaying = false;
  }
});

document.querySelector("#new-game-btn").addEventListener("click", init);

function init() {
  choices = ["rock", "paper", "scissors"];

  botChoiceNo = Math.floor(Math.random() * choices.length);
  botChoice = choices[botChoiceNo];

  rockBtn = document.querySelector("#rock");
  paperBtn = document.querySelector("#paper");
  scissorsBtn = document.querySelector("#scissors");

  resultArea = document.querySelector(".result");
  player1Area = document.querySelector(".yourChoice");
  player2Area = document.querySelector(".botChoice");

  wins1 = document.querySelector(".wins1");
  draws1 = document.querySelector(".draws1");
  loses1 = document.querySelector(".loses1");

  wins2 = document.querySelector(".wins2");
  draws2 = document.querySelector(".draws2");
  loses2 = document.querySelector(".loses2");

  resultArea.textContent = "getting result...";
  player1Area.textContent = "";
  player2Area.textContent = "";

  gamePlaying = true;
}

function resetScores() {
  yourWins = 0;
  yourLoses = 0;
  yourDraws = 0;

  botWins = 0;
  botLoses = 0;
  botDraws = 0;

  wins1.textContent = yourWins;
  draws1.textContent = yourDraws;
  loses1.textContent = yourLoses;

  wins2.textContent = botWins;
  draws2.textContent = botDraws;
  loses2.textContent = botLoses;
}

document.querySelector("#reset-scores").addEventListener("click", resetScores);
