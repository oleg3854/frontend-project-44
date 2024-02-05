#!/usr/bin/env node
//import readlineSync from 'readline-sync';
//import greeting from '../src/cli.js';
import gameBody from '../src/gameBody.js';

//const userName = greeting();

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const task = () => {
  const q = Math.round(Math.random() * 100);

  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }

  return [q, a];
};

gameBody(description, task)