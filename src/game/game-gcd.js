import runGame from '../game-engine';
import { getRandom } from '..';

const getNod = (a, b) => {
  if (a === b) {
    return a;
  }
  return (a > b) ? getNod(a - b, b) : getNod(a, b - a);
};

const gameTesk = 'Find the greatest common divisor of given numbers.';

class GameLogic {
  constructor() {
    this.a = getRandom(1, 15);
    this.b = getRandom(1, 15);
  }

  getQuestion = () => `${this.a} ${this.b}`;

  getAnswer = () => getNod(this.a, this.b);
}

export default () => {
  runGame(gameTesk, GameLogic);
};

