/**
 * A good way to solve this problem is using .reduce, but the array could be really huge, so I prefered to use
 * FOR loop to count the numbers and check the difference between the correct counter and the current one (as the array
 * has only one number missing);
 *
 * https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 */

function solution(A) {
  if (!A || A.length === 0) {
      return 1;
  }

  let correctSum = 0;
  let currentSum = 0;

  for (let i = A.length; i--;) { // Speed up method to count huge arrays
    currentSum += A[i];
  }

  correctSum = (A.length + 1) * (A.length + 2) / 2;

  return correctSum - currentSum;
}
