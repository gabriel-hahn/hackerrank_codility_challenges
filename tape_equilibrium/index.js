/**
 * In this problem, I created an array of sum of left and right side, so I can check the minimal difference
 * between both arrays while I decrease the right array and increase the left one.
 *
 * https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
 */

function solution(A) {
  if (!A || A.length === 0) {
    return 0;
  }

  if (A.length === 1) {
    return A[0];
  }

  let minimalDifference = Number.MAX_SAFE_INTEGER;
  let leftSideCounter = 0;
  let rightSideCounter = A.reduce((a, b) => a + b, 0);

  for (let i = 0; i < A.length; i++) {
    rightSideCounter -= A[i];
    leftSideCounter += A[i];

    const subtraction = Math.abs(leftSideCounter - rightSideCounter);

    if (subtraction < minimalDifference) {
      minimalDifference = subtraction;
    }
  }

  return minimalDifference;
}
