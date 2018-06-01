import runGame from '../game-engine';
import getRandom from '../utils';

const isPrime = (number) => {
  const iter = (divisor) => {
    if (number % divisor !== 0) {
      return iter(divisor - 1);
    }

    if (number % divisor === 0 && divisor === 1) {
      return true;
    }
    return false;
  };

  return iter(number - 1);
};

const gameTask = 'Is this number prime?';

const gameData = () => {
  const a = getRandom(1, 150);

  const question = a;
  const answer = isPrime(a) ? 'yes' : 'no';

  return { question, answer };
};

export default () => {
  runGame(gameTask, gameData);
};
