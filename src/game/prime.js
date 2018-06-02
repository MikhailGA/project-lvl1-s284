import runGame from '../game-engine';
import getRandom from '../utils';

const gameTask = 'Is this number prime?';

const isPrime = (number) => {
  const iter = (divisor) => {
    if (number % divisor !== 0) {
      return iter(divisor + 1);
    }

    if (number % divisor === 0 && divisor === number) {
      return true;
    }
    return false;
  };

  return (number < 2) ? false : iter(2);
};

const gameData = () => {
  const a = getRandom(1, 150);

  const question = a;
  const answer = isPrime(a) ? 'yes' : 'no';

  return { question, answer };
};

export default () => {
  runGame(gameTask, gameData);
};
