
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