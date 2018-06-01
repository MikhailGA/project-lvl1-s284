import runGame from '../game-engine';
import getRandom from '../utils';

const gameTask = 'What number is missing in this progression?';
const elementCount = 10;

const makeProgression = (itemCount) => {
  const startItem = getRandom(1, 100);
  const delta = getRandom(2, 10);

  const iter = (arr, count, item) => {
    if (count === 0) {
      return arr;
    }
    const nextItem = item + delta;
    return iter([...arr, item], count - 1, nextItem);
  };

  return iter([], itemCount, startItem);
};

const hideItem = (arr, number) => {
  const newArr = arr.slice();
  newArr[number - 1] = '..';
  return newArr;
};

const getItem = (arr, number) => arr[number - 1];

const gameData = () => {
  const progression = makeProgression(elementCount);
  const hidNumber = getRandom(1, elementCount);

  const question = hideItem(progression, hidNumber).join(' ');
  const answer = getItem(progression, hidNumber);

  return { question, answer };
};

export default () => {
  runGame(gameTask, gameData);
};
