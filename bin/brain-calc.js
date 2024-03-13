#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import { brainCalc } from '../src/index.js';

const description = 'What is the result of the expression?';

gameBody(description, brainCalc);
