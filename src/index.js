import readlineSync from 'readline-sync';

const getAnswer = str => readlineSync.question(str);

const userGreeting = userName => `Hello, ${userName}!\n`;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const startGame = (questCount, user) => {
  // check end of game
  if (questCount === 0) {
    console.log(`Congratulations, ${user}!`);
    return;
  }
  // get random number
  const questValue = getRandom(0, 20);
  console.log(`Question: ${questValue}`);
  // check parity
  const parity = (questValue % 2 === 0) ? 'yes' : 'no';

  // get user answer
  const answer = getAnswer('Your answer: ');

  //  if answer was correct
  if (parity === answer) {
    console.log('Correct!');
    startGame(questCount - 1, user);
  } else {
    //  if answer was incorrect
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parity}'.`);
    console.log(`Let's try again, ${user}!`);
  }
};

export { getAnswer, userGreeting, startGame };
