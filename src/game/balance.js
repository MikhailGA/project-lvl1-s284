import runGame from '../game-engine';
import getRandom from '../utils';

const gameTask = 'Balance the given number.';

const numToArr = number => String(number).split('').map(Number);

const makeBalanceNumber = (number) => {
  const array = numToArr(number);

  array.sort((a, b) => a - b);
  let delta = array[array.length - 1] - array[0];

  while (delta > 1) {
    array[0] += 1;
    array[array.length - 1] -= 1;
    array.sort((a, b) => a - b);
    delta = array[array.length - 1] - array[0];
  }

  return array.join('');
};

const gameData = () => {
  const a = getRandom(10, 4000);

  const question = a;
  const answer = String(makeBalanceNumber(a));

  return { question, answer };
};

export default () => {
  runGame(gameTask, gameData);
};
