/*Career Kings script for dice game*/
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const dice1 = document.querySelector('.dice');
const btnFold = document.querySelector('.btn--fold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice1.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};


btnRoll.addEventListener('click', function () {
  if (playing) {
    
    const dice = Math.trunc(Math.random() * 6) + 1;

    
    dice1.classList.remove('hidden');
    dice1.src = `dice-${dice}.png`;

  
    if (dice !== 1) {
      
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
    
      switchPlayer();
    }
  }
});

btnFold.addEventListener('click', function () {
  if (playing) {
    
    scores[activePlayer] += currentScore;
    

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    
    if (scores[activePlayer] >= 100) {

      playing = false;
      dice.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
  
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
