#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import { brainPrime } from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameBody(description, brainPrime);
