import runGame from '../game-engine';
import getRandom from '../utils';

const gameTesk = 'What number is missing in this progression?';
const elementCount = 10;

const makeProgr = (itemCount) => {
  const startItem = getRandom(1, 100);
  const delta = getRandom(2, 10);

  const iter = (arr, count, item) => {
    if (count === 0) {
      return arr;
    }
    arr.push(item);
    const nextItem = item + delta;
    return iter(arr, count - 1, nextItem);
  };

  return iter([], itemCount, startItem);
};

const hideItem = (arr, number) => {
  const newArr = arr.slice();
  newArr[number - 1] = '..';
  return newArr;
};

const getItem = (arr, number) => arr[number - 1];

const gameLogic = () => {
  const progression = makeProgr(elementCount);
  const hidNumber = getRandom(1, elementCount);

  const solution = {
    getQuestion: () => hideItem(progression, hidNumber).join(' '),
    getAnswer: () => getItem(progression, hidNumber),
  };
  return solution;
};

export default () => {
  runGame(gameTesk, gameLogic);
};
