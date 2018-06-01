import runGame from '../game-engine';
import getRandom from '../utils';

const isEven = number => (number % 2 === 0);

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const gameData = () => {
  const a = getRandom(1, 20);

  const question = a;
  const answer = isEven(a) ? 'yes' : 'no';

  return { question, answer };
};

export default () => {
  runGame(gameTask, gameData);
};
