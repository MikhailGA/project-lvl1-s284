import runGame from '../game-engine';
import { getRandom } from '..';

const expressions = {
  1: [(a, b) => a * b, (a, b) => `${a} * ${b}`],
  2: [(a, b) => a - b, (a, b) => `${a} - ${b}`],
  3: [(a, b) => a + b, (a, b) => `${a} + ${b}`],
};

const gameTesk = 'What is the result of the expression?';

class GameLogic {
  constructor(round) {
    this.a = getRandom(1, 20);
    this.b = getRandom(1, 20);
    this.round = round;
  }

  getQuestion = () => expressions[this.round][1](this.a, this.b);

  getAnswer = () => expressions[this.round][0](this.a, this.b);
}

export default () => {
  runGame(gameTesk, GameLogic);
};

