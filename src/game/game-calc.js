import runGame from '../game-engine';
import getRandom from '../utils';

const expressions = {
  1: [(a, b) => a * b, (a, b) => `${a} * ${b}`],
  2: [(a, b) => a - b, (a, b) => `${a} - ${b}`],
  3: [(a, b) => a + b, (a, b) => `${a} + ${b}`],
};

const gameTesk = 'What is the result of the expression?';

const gameLogic = (round) => {
  const a = getRandom(1, 20);
  const b = getRandom(1, 20);

  const solution = {
    getQuestion: () => expressions[round][1](a, b),
    getAnswer: () => expressions[round][0](a, b),
  };
  return solution;
};

export default () => {
  runGame(gameTesk, gameLogic);
};
