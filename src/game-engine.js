import readlineSync from 'readline-sync';

const roundCount = 3;

const startGame = (Logic, questCount) => {
  // check end of game
  if (questCount === 0) {
    return true;
  }
  // get new task
  const newTask = new Logic(questCount);
  const question = newTask.getQuestion();
  const answer = String(newTask.getAnswer());
  console.log(`Question: ${question}`);

  // get user answer
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    //  if answer was correct
    console.log('Correct!');
    return startGame(Logic, questCount - 1);
  }
  //  if answer was incorrect
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

export default (gameTask, GameLogic) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${gameTask}.\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const rezult = startGame(GameLogic, roundCount);

  if (rezult) {
    //  if user win
    console.log(`Congratulations, ${userName}!`);
  } else {
    //  if user fail
    console.log(`Let's try again, ${userName}!`);
  }
};
