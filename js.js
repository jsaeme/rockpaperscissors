let y = prompt ('rock, paper, or scissor?').toLowerCase();
let playerScore = 0;
let computerScore = 0;
let game = (playerScore + computerScore);

for (game=0;game<6;game++) {
    console.log(getRandomInt(3));
    function getRandomInt(max) {
        let x = Math.floor(Math.random() * max);
                if (x === 0 && y.toLowerCase === 'rock') {
                    ai = "It's a tie! Try again!";
                } else if (x === 0 && y === 'paper') {
                    playerScore++;
                    ai = "You Win! Paper Beats Rock!";
                } else if (x === 0 && y === 'scissor') {
                    computerScore++;
                    ai = "You lose! Rock Beats Scissor!";
                } else if (x === 1 && y === 'paper') {
                    ai = "It's a tie! Try again!";
                } else if (x === 1 && y === 'rock') {
                    computerScore++;
                    ai = "You lose! Paper Beats Rock!";
                } else if (x === 1 && y === 'scissor') {
                    playerScore++;
                    ai = "You Win! Scissor Beats Paper!";
                } else if (x === 2 && y === 'rock') {
                    playerScore++;
                    ai = "You Win! Rock Beats Scissors!";
                } else if (x === 2 && y === 'paper') {
                    computerScore++;
                    ai = "You lose! Scissors Beats Paper!";
                } else if (x === 2 && y === 'scissor') {
                ai = "It's a tie! Try again!";
                } else {
                ai = "Incorrect input! Try entering either Paper, Rock or Scissor!";
                }
            alert (ai + " " + "player:" + " " + playerScore + " " + "computer:" + " " + computerScore);
    }
}