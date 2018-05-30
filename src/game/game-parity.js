import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = number => ((number % 2 === 0) ? 'yes' : 'no');

const roundCount = 3;

const startGame = (questCount) => {
  // check end of game
  if (questCount === 0) {
    return true;
  }
  // get random number
  const question = getRandom(1, 20);
  console.log(`Question: ${question}`);
  // check parity
  const answer = isEven(question);

  // get user answer
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    //  if answer was correct
    console.log('Correct!');
    return startGame(questCount - 1);
  }
  //  if answer was incorrect
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

export default () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const rezult = startGame(roundCount);

  if (rezult) {
    //  if user win
    console.log(`Congratulations, ${userName}!`);
  } else {
    //  if user fail
    console.log(`Let's try again, ${userName}!`);
  }
};
