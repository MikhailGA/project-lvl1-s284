#!/usr/bin/env node
import { getAnswer, userGreeting, startGame } from '..';

console.log('\nWelcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = getAnswer('May I have your name? ');
console.log(userGreeting(userName));

startGame(3, userName);
