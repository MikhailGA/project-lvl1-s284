Brain-games 
===========
[![Maintainability](https://api.codeclimate.com/v1/badges/ef404f59fdbd2ebee456/maintainability)](https://codeclimate.com/github/MikhailGA/project-lvl1-s284/maintainability) 
  [![Build Status](https://travis-ci.org/MikhailGA/project-lvl1-s284.svg?branch=master)](https://travis-ci.org/MikhailGA/project-lvl1-s284)

ABOUT Brain-games 
-----------------

This is a training project that includes a set of logical games, created to improve programming skills in the Java script language.

INSTALLATION
------------

```
npm install brain-games.freon
```

GAMES
-----

The package includes 6 games
1. brain-even;
2. brain-calc;
3. brain-gcd;
4. brain-balance;
5. brain-progression;
6. brain-prime.

PROCESS OF THE GAME
-------------------

To start the game, type its name in the console. For example:
```
$ brain-even
```

After that you will see the text with the task of the game and the suggestion to enter the user name:
```
Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no"..

May I have your name? 
```
After confirmation, the game begins which consists of 3 rounds. At each stage you need to enter the answer to the question in the console window:

```
Question: 10
Your answer: yes
```
If the answer was correct, a confirmation message will appear and the game will move on to the next question:
```
Correct!
Question: 1
Your answer: 
```
If all three answers were correct, you will see a congratulation and the game is over:

```
Congratulations, Mike!
```

If the answer was not correct, the game will tell you about it and finish:

```
Question: 1
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Mike!
```