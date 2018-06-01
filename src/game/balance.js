import runGame from '../game-engine';
import getRandom from '../utils';

const gameTask = 'Balance the given number.';

const numToArr = number => String(number).split('').map(Number);

const makeBalanceNumber = (number) => {
  const array = numToArr(number);

  const iter = (arr) => {
    const sortArr = arr.slice().sort((a, b) => a - b);
    const delta = sortArr[sortArr.length - 1] - sortArr[0];
    if (delta > 1) {
      const firstItem = sortArr[0];
      const lastItem = sortArr[sortArr.length - 1];
      const arrBody = sortArr.slice(1, sortArr.length - 1);

      return iter([firstItem + 1, ...arrBody, lastItem - 1]);
    }
    return sortArr;
  };

  return iter(array).join('');
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
