import greeting from '../src/cli.js';

const gameBody = (description, taskFunc) => {
  const playerName = greeting();
  console.log(description);

  let mark = 0;
  for (let i = 1; i <= 3; i += 1) {
    const step = taskFunc();

    console.log(`Question: ${step[0]}`);
    const answer = readlineSync.question('Answer: ');

    if (answer === step[1]) {
      console.log('Correct!');
      mark += 1;
    } else {
      console.log(`${answer} is wrong answer; (. Correct answer was ${step[1]}`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (mark === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
}
export default gameBody();