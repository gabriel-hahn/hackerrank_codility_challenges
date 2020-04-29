/**
 * This challenge is of return the biggest divider between two numbers.
 * For example:
 *
 * 10 and 5 is 5 is the biggest number which we can divide 10 or 5 and get 0.
 * 21 and 13 is 1
 * 100 and 100 is 100
 * 4 and 2 is 2
 *
 * The function parameter is a string like '100 5';
 */

function processarLinha(linha) {
  const isNumber = typeof linha === 'number';

  if (isNumber || !linha) { // Number types contains only one number;
    return;
  }

  const numbersArr = linha.split(' ');
  const firstNumber = +numbersArr[0];
  const secondNumber = +numbersArr[1];

  let divisor = 2;
  let maiorDivisorComum = 1;

  if (!firstNumber || !secondNumber) {
    return firstNumber || secondNumber;
  }

  while (firstNumber >= divisor && secondNumber >= divisor) {
    if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
      maiorDivisorComum = divisor;
    }

    ++divisor;
  }

  return maiorDivisorComum;
}
