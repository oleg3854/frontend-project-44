const brainCalc = () => {
  const operand1 = Math.round(Math.random() * 10);
  const operand2 = Math.round(Math.random() * 10);

  const operator = ['+', '*', '-'];
  const indexOper = Math.floor(Math.random() * 3);

  let answer = 0;

  switch (indexOper) {
    case 0:
      answer = `${operand1 + operand2}`;
      break;
    case 1:
      answer = `${operand1 * operand2}`;
      break;
    default:
      answer = `${operand1 - operand2}`;
      break;
  }

  return [`${operand1} ${operator[indexOper]} ${operand2}`, answer];
};

const brainEven = () => {
  const q = Math.round(Math.random() * 100);

  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }

  return [q, a];
};

const brainGcd = () => {
  const num1 = Math.round(Math.random() * 50);
  const num2 = Math.round(Math.random() * 50);

  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = `${a + b}`;

  return [`${num1} ${num2}`, answer];
};

const brainPrime = () => {
  const num = Math.round(Math.random() * 100);
  const numD = Math.round(Math.sqrt(num));
  for (let i = 2; i < numD; i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
};

const brainProgression = () => {
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

export {
  brainCalc,
  brainEven,
  brainGcd,
  brainPrime,
  brainProgression,
};
