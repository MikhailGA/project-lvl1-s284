import runGame from '../game-engine';
import getRandom from '../utils';

const gameTesk = 'Balance the given number.';

const numToArr = number => String(number).split('').map(item => Number(item));

const getBalace = (number) => {
  const array = numToArr(number);

  const iter = (arr) => {
    const sortArr = arr.slice().sort((a, b) => a - b);
    const delta = sortArr[sortArr.length - 1] - sortArr[0];
    if (delta > 1) {
      sortArr[0] += 1;
      sortArr[arr.length - 1] -= 1;
      return iter(sortArr);
    }
    return sortArr.join('');
  };

  return iter(array);
};

const gameLogic = () => {
  const a = getRandom(10, 4000);

  const solution = {
    getQuestion: () => a,
    getAnswer: () => getBalace(a),
  };
  return solution;
};

export default () => {
  runGame(gameTesk, gameLogic);
};
