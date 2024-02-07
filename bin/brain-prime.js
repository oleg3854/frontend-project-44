#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const num = Math.round(Math.random() * 100);
  const numD = Math.round(Math.sqrt(num));
  for (let i = 2; i < numD; i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
}

gameBody(description, task);