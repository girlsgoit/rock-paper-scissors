console.log("Here");

// Crează un joc de rock - paper - scissors
// Primul jucător vei fi tu, al doilea calculatorul

// Part.1
// 1. Adăugăm event listener pentru butoane, câte unul pentru fiecare buton
// 2. Creăm funcția ce ne va returna alegerea calculatorului
// 3. Comparăm alegerea calculatorului cu a user-ului
// 4. Anunțăm câștigătorul rundei(cine și ce variantă a ales)
// 5. Creăm o funcție ce primește ca parametru numărul opțiunei,
//    și returnează numele opțiunii

// Part.2
// 1. Variabile pentru număurl total de runde și runda curentă
// 2. Când se joacă o rundă, să modificăm runda curentă
// 3. După ultima rundă, anunțăm câștigătorul pe general, cu scorul pentru fiecare
// 4. Afișăm la ecran progresul rundelor
// 5. După ultima rundă, resetăm scorul și runda curentă

// Part.3 Optional
// Afișăm în pagină scorul curent a calculatorului și utilizatorului

// Part.4 Optional
// O variantă de joc nelimitată în variante

const totalRounds = 3;
let currentRound = 0;
const score = {
  player: 0,
  pc: 0,
};

let pcMove = 0;

let choiseToNameMap = ['rock', 'paper', 'scissors'];

function makePcMove() {
  pcMove = Math.round(Math.random() * 2);
}

function incrementRound() {
  currentRound++;
  playedRounds.innerText = currentRound + 1;
}

document.querySelector('.rock-btn').addEventListener('click', function() {
  fight(0);
});
document.querySelector('.paper-btn').addEventListener('click', function() {
  fight(1);
});
document.querySelector('.scissors-btn').addEventListener('click', function() {
  fight(2);
});

function fight(playerChoice) {
  makePcMove();
  
  if (playerChoice === pcMove) {
    alert(`It is a draw! You both chose ${choiseToNameMap[playerChoice]}.`);
  } else if (playerChoice === 0) {
    handleRockScenario();
    incrementRound();
  } else if (playerChoice === 1) {
    handlePaperScenario();
    incrementRound();
  } else if (playerChoice === 2) {
    handleScissorsScenario();
    incrementRound();
  }
  
  if (currentRound === totalRounds) {
    announceOverwallWinner();
  }
}

function handleRockScenario() {
  if (pcMove === 1) {
    announcePCWin(pcMove);
  } else {
    announcePlayerWin(pcMove);
  }
}

function handlePaperScenario() {
  if (pcMove === 0) {
    announcePlayerWin(pcMove);
  } else {
    announcePCWin(pcMove);
  }
}

function handleScissorsScenario() {
  if (pcMove === 0) {
    announcePCWin(pcMove);
  } else {
    announcePlayerWin(pcMove);
  }
}

function getMoveDescription(n) {
  return choiseToNameMap[n];
}

function announcePCWin() {
  score.pc++;
  let moveText = getMoveDescription(pcMove);
  
  alert('PC won! It chose ' + moveText + '!');
}

function announcePlayerWin() {
  score.player++;
  let moveText = getMoveDescription(pcMove);
  
  alert('You won! PC chose ' + moveText + '!');
}

function announceOverwallWinner() {
  if (score.pc > score.player) {
    alert('PC wins this game with a score of ' + score.pc + ' to ' + score.player + '!');
  } else {
    alert('You win this game with a score of ' + score.player + ' to ' + score.pc + '!');
  }
  
  score.pc = 0;
  score.player = 0;
  currentRound = 0;
  playedRounds.innerText = 1;
}
