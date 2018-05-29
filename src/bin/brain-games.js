#!/usr/bin/env node
const readlineSync = require('readline-sync');
const userGreeting = require('..');

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(userGreeting(userName));
