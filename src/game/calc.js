import runGame from '../game-engine';
import getRandom from '../utils';

const expressions = {
  1: [(a, b) => a * b, (a, b) => `${a} * ${b}`],
  2: [(a, b) => a - b, (a, b) => `${a} - ${b}`],
  3: [(a, b) => a + b, (a, b) => `${a} + ${b}`],
};

const gameTask = 'What is the result of the expression?';

const gameData = () => {
  const a = getRandom(1, 50);
  const b = getRandom(1, 50);
  const round = getRandom(1, 3);

  const question = expressions[round][1](a, b);
  const answer = expressions[round][0](a, b);

  return { question, answer };
};

export default () => {
  runGame(gameTask, gameData);
};
