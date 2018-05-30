import readlineSync from 'readline-sync';

const getAnswer = str => readlineSync.question(str);

const userGreeting = userName => `Hello, ${userName}!\n`;

export { getAnswer, userGreeting };
