import runGame from '../game-engine';
import getRandom from '../utils';

const isEven = number => (number % 2 === 0);

const gameTesk = 'Answer "yes" if number even otherwise answer "no".';

const gameLogic = () => {
  const a = getRandom(1, 20);

  const solution = {
    getQuestion: () => a,
    getAnswer: () => ((isEven(a)) ? 'yes' : 'no'),
  };
  return solution;
};

export default () => {
  runGame(gameTesk, gameLogic);
};
