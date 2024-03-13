#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import { brainEven } from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

gameBody(description, brainEven);
