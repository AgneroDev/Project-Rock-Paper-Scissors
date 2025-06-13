let humanScore = 0;
let computerScore = 0;

let currentRound = 0;
let MaxRounds = 5;

function getComputerChoice() {
  let aleatoire = Math.floor(Math.random() * 3);
  if (aleatoire === 0) {
    return "rock";
  } else if (aleatoire === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultat = "Tu gagnes ce tour !";
  } else if (humanChoice === computerChoice) {
    resultat = "Égalité !";
  } else {
    computerScore++;
    resultat = "L'ordinateur gagne ce tour !";
  }

  const resultatDiv = document.getElementById("resultat");
  resultatDiv.innerHTML = `
    <p>Joueur : ${humanChoice} | Ordinateur : ${computerChoice}</p>
    <p>${resultat}</p>
    <p>Score - Toi: ${humanScore} | Ordinateur: ${computerScore}</p>
  `;
}

function endGame() {
  const resultatFin = document.getElementById("resultatFin");

  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;

  let messagerFin = "";
  if (humanScore > computerScore) {
    messagerFin = "🎉 Tu as gagné la partie ! Bravo !";
  } else if (humanScore < computerScore) {
    messagerFin = "😞 L'ordinateur a gagné la partie !";
  } else {
    messagerFin = "🤝 Match nul !";
  }

  resultatFin.innerHTML += `<p><strong>${messagerFin}</strong></p>`;
}

document.getElementById("rock").addEventListener("click", function () {
  document.getElementById("resultat").style.display = "block";
  if (currentRound < MaxRounds) {
    playRound("rock");
    currentRound++;
  }
  if (currentRound === MaxRounds) {
    document.getElementById("resultatFin").style.display = "block";
    endGame();
  }
});
document.getElementById("paper").addEventListener("click", function () {
  document.getElementById("resultat").style.display = "block";
  if (currentRound < MaxRounds) {
    playRound("paper");
    currentRound++;
  }
  if (currentRound === MaxRounds) {
    document.getElementById("resultatFin").style.display = "block";
    endGame();
  }
});

document.getElementById("scissors").addEventListener("click", function () {
  document.getElementById("resultat").style.display = "block";
  if (currentRound < MaxRounds) {
    playRound("scissors");
    currentRound++;
  }
  if (currentRound === MaxRounds) {
    document.getElementById("resultatFin").style.display = "block";
    endGame();
  }
});
