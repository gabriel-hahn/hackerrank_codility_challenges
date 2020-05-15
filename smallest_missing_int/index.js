/**
 * We need to check somethings about this challenge:
 *
 * If all numbers are negative, we should return 1.
 * We can have more than one number missing, but we should return only the smallest one.
 * The array has max 100.000 elements, but each element has a range between -1.000.000 and 1.000.000, but it's
 * just to confuse as 100.001 is the maximum number we can return [1 - 100.000].
 *
 * For this solution I used SET to store numbers bigger than zero, not repeat theirself and have a better performance
 * when search for the smallest number missing using WHILE.
 *
 * https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 */

function solution(A) {
  const setNumbers = new Set();
  let smallestMissingInteger = 1;

  if (!A || A.length === 0) {
    return smallestMissingInteger;
  }

  A.forEach(item => item > 0 && setNumbers.add(item));

  while(setNumbers.has(smallestMissingInteger)) {
    smallestMissingInteger++;
  }

  return smallestMissingInteger;
}
