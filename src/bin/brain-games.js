#!/usr/bin/env node
import { userGreeting, getAnswer } from '..';

console.log('Welcome to the Brain Games!');

const userName = getAnswer('May I have your name? ');
console.log(userGreeting(userName));
