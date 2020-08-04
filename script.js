// let playerWin = 0
// let computerWin = 0
const choices = ['rock', 'paper', 'scissors']

function computerPlay(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log('Computer chooses ' + computerPlay(choices))

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection
  if ((ps == 'rock' && cs == 'scissors') || (ps == 'paper' && cs == 'rock') || (ps == 'scissors' && cs == 'paper')) {
    return 'You won! Great job!'
  } 
  else if (ps == cs) {
    return 'Tie! Go again!'
  }
  else {
    return 'You lost! Shame egg!'
  }
}

function game() {
  let round = 0
  while(round < 5) {
    let playerSelection = prompt('Rock, Paper or Scissors?')
    console.log('You choose ' + playerSelection)
    let computerSelection = computerPlay(choices)
    console.log(playRound(playerSelection, computerSelection));
    round++
  }
}

game();
