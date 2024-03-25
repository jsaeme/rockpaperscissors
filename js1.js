

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

  function playrock(){
  console.log(getRandomInt(3));
  function getRandomInt(max) {
      let x = Math.floor(Math.random() * max);
              if (x === 0) {
              ai = "It's a tie! Try again!";
              } else if (x === 1) {
              ai = "You lose! Paper Beats Rock!";
              } else if (x === 2) {
              ai = "You Win! Rock Beats Scissors!";
              } else {
              ai = "Error Try again!";
              }
          result = ai;
    }
  }