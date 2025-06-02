let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let aleatoire = Math.floor(Math.random() * 3);
  if (aleatoire === 0) {
    return "pierre";
  } else if (aleatoire === 1) {
    return "papier";
  } else {
    return "ciseaux";
  }
}

function getHumanChoice() {
  let choice = null;
  do {
    choice = prompt("faire un choix pierre, papier ou ciseaux", "");
    if (choice !== null) {
      choice = choice.trim().toLowerCase();
    }
  } while (
    choice === null ||
    (choice !== "pierre" && choice !== "papier" && choice !== "ciseaux")
  );
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "pierre" && computerChoice === "ciseaux") ||
    (humanChoice === "papier" && computerChoice === "pierre") ||
    (humanChoice === "ciseaux" && computerChoice === "papier")
  ) {
    humanScore++;
    return "Tu gagnes ce tour !";
  } else if (humanChoice === computerChoice) {
    return "Égalité !";
  } else {
    computerScore++;
    return "L'ordinateur gagne ce tour !";
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log("Tour numéro :", i + 1);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const resultatTour = playRound(humanChoice, computerChoice);
    console.log(
      `Tu as choisi : ${humanChoice}, ordinateur a choisi : ${computerChoice}`
    );
    console.log(resultatTour);
    console.log(
      `Score actuel — Humain: ${humanScore} | Ordinateur: ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log("Tu as gagné la partie !");
  } else if (humanScore < computerScore) {
    console.log("L'ordinateur a gagné la partie !");
  } else {
    console.log("Match nul !");
  }
}
playGame();
