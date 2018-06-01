import runGame from '../game-engine';
import getRandom from '../utils';

const getNod = (a, b) => {
  if (a === b) {
    return a;
  }
  return (a > b) ? getNod(a - b, b) : getNod(a, b - a);
};

const gameTask = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);

  const question = `${a} ${b}`;
  const answer = getNod(a, b);

  return { question, answer };
};

export default () => {
  runGame(gameTask, gameData);
};

