import runGame from '../game-engine';
import getRandom from '../utils';

const makeResheto = (number) => {
  const n = number + 1;
  // Eratosthenes algorithm to find all primes under n
  const array = [];
  const upperLimit = Math.sqrt(n);
  const output = [2];
  // Make an array from 2 to (n - 1)
  for (let i = 0; i < n; i += 1) {
    array.push(1);
  }
  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 3; i <= upperLimit; i += 2) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i * 2) {
        array[j] = 0;
      }
    }
  }
  // All array[i] set to 1 (true) are primes
  for (let i = 3; i < n; i += 2) {
    if (array[i]) {
      output.push(i);
    }
  }
  return output;
};

const gameTask = 'Is this number prime?';

const upperLimit = 150;

const reshetoEratosfena = makeResheto(upperLimit);

const isPrime = number => reshetoEratosfena.includes(number);

const gameData = () => {
  const a = getRandom(2, upperLimit);

  const question = a;
  const answer = isPrime(a) ? 'yes' : 'no';

  return { question, answer };
};

export default () => {
  runGame(gameTask, gameData);
};
