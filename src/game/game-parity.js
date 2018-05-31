import runGame from '../game-engine';
import { getRandom } from '..';

const isEven = number => (number % 2 === 0);

const gameTesk = 'Answer "yes" if number even otherwise answer "no".';

class GameLogic {
  constructor() {
    this.a = getRandom(1, 20);
  }

  getQuestion = () => this.a;

  getAnswer = () => ((isEven(this.a)) ? 'yes' : 'no');
}

export default () => {
  runGame(gameTesk, GameLogic);
};
