

  function getRandomInt(max) {
    let x = Math.floor(Math.random() * max);
            if (x === 0) {
            result = "rock";
            } else if (x === 1) {
            result = "paper";
            } else {
            result = "scissor";
            }
        return result;
  }

  let y = prompt ('rock, paper, or scissor?').toLowerCase();

  console.log(getRandomInt(3));
  function getRandomInt(max) {
      let x = Math.floor(Math.random() * max);
              if (x === 0 && y.toLowerCase === 'rock') {
              ai = "It's a tie! Try again!";
              } else if (x === 0 && y === 'paper') {
              ai = "You Win! Paper Beats Rock!";
              } else if (x === 0 && y === 'scissor') {
              ai = "You lose! Rock Beats Scissor!";
              } else if (x === 1 && y === 'paper') {
              ai = "It's a tie! Try again!";
              } else if (x === 1 && y === 'rock') {
              ai = "You lose! Paper Beats Rock!";
              } else if (x === 1 && y === 'scissor') {
              ai = "You Win! Scissor Beats Paper!";
              } else if (x === 2 && y === 'rock') {
              ai = "You Win! Rock Beats Scissors!";
              } else if (x === 2 && y === 'paper') {
              ai = "You lose! Scissors Beats Paper!";
              } else if (x === 2 && y === 'scissor') {
              ai = "It's a tie! Try again!";
              } else {
              ai = "Incorrect input! Try entering either Paper, Rock or Scissor!";
              }
          alert (ai);
    }