import readlineSync from 'readline-sync';

const getAnswer = str => readlineSync.question(str);

const userGreeting = userName => `Hello, ${userName}!\n`;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export { getAnswer, userGreeting, getRandom };
