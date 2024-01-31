#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
console.log('What is the result of the expression?');

const randomNumber = () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);
  return [a, b];
}
console.log(randomNumber());

const randomNumber = () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);
  return [a, b];
}
const da = ['+', '-', '*'];
const net = da[Math.round(Math.random() * 2)]; // 0, 1, 2
console.log(net);

if (net === '-') {
  return a - b;
}
// export default runCalcGame;