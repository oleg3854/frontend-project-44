#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import { brainGcd } from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

gameBody(description, brainGcd);
