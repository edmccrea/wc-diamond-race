//Grab elements
const diamonds = document.querySelectorAll('diamond-card');
const scores = document.querySelectorAll('score-card');
const resetBtn = document.querySelector('.reset-btn');

let isGameOver = false;

//Create function to check for gameover condition
const checkGameOver = () => {
  scores.forEach((score) => {
    const valueCheck = score.shadowRoot.childNodes[5];
    if (valueCheck.innerHTML === '10') {
      diamonds.forEach((diamond) => {
        diamond.deactivate();
        isGameOver = true;
      });
    }
  });
};

//Run game on click of diamond
diamonds.forEach((diamond, i) => {
  diamond.addEventListener('click', () => {
    //If game over conditions are not met, increment score and diamond one step
    if (!isGameOver) {
      diamond.increment();
      scores[i].increment();

      checkGameOver();
    }
  });
});

//Reset game
const resetGame = () => {
  diamonds.forEach((diamond, i) => {
    diamond.reset();
    scores[i].reset();
  });
  isGameOver = false;
};

resetBtn.addEventListener('click', resetGame);
