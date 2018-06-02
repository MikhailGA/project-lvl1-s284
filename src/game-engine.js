import readlineSync from 'readline-sync';

const roundCount = 3;

const startGame = (logic, questCount) => {
  // check end of game
  if (questCount === 0) {
    return true;
  }
  // get new task
  const newTask = logic();
  const { question, answer } = newTask;
  console.log(`Question: ${question}`);

  // get user answer
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    //  if answer was correct
    console.log('Correct!');
    return startGame(logic, questCount - 1);
  }
  //  if answer was incorrect
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

export default (gameTask, gameLogic) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${gameTask}.\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const isWin = startGame(gameLogic, roundCount);

  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
