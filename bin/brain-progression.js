#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'What number is missing in the progression?';

const task = () => {
  const arrayLength = Math.floor(Math.random() * 5) + 5;
  const progressDelta = Math.round(Math.random() * 10);
  const firstNumber = Math.round(Math.random() * 100);
  const progression = [];
  progression.push(firstNumber);
  for (let i = 1; i < arrayLength; i += 1) {
    progression.push(progression[i - 1] + progressDelta);
  }
  const emptyIndex = Math.floor(Math.random() * arrayLength);
  const answer = `${progression[emptyIndex]}`;
  progression[emptyIndex] = '..';

  return [progression.join(' '), answer];
};

gameBody(description, task);
