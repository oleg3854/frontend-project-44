#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import { brainProgression } from '../src/index.js';

const description = 'What number is missing in the progression?';

gameBody(description, brainProgression);
