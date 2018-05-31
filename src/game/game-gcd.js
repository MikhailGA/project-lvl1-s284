import runGame from '../game-engine';
import getRandom from '../utils';

const getNod = (a, b) => {
  if (a === b) {
    return a;
  }
  return (a > b) ? getNod(a - b, b) : getNod(a, b - a);
};

const gameTesk = 'Find the greatest common divisor of given numbers.';

const gameLogic = () => {
  const a = getRandom(1, 20);
  const b = getRandom(1, 20);

  const solution = {
    getQuestion: () => `${a} ${b}`,
    getAnswer: () => getNod(a, b),
  };
  return solution;
};

export default () => {
  runGame(gameTesk, gameLogic);
};

