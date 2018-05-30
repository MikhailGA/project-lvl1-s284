import readlineSync from 'readline-sync';

export default () => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const isEven = number => ((number % 2 === 0) ? 'yes' : 'no');

  const startGame = (user, questCount = 3) => {
    // check end of game
    if (questCount === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    // get random number
    const question = getRandom(1, 20);
    console.log(`Question: ${question}`);
    // check parity
    const answer = isEven(question);
    // get user answer
    const userAnswer = readlineSync.question('Your answer: ');
    //  if answer was correct
    if (userAnswer === answer) {
      console.log('Correct!');
      startGame(user, questCount - 1);
    } else {
      //  if answer was incorrect
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${user}!`);
    }
  };

  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  startGame(userName);
};
