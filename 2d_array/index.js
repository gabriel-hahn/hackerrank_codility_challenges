/**
 * At this problem we need to check the array for the maximum value possible using the hourglass to group the values as following:
 *
 * -9 -9 -9  1 1 1
 * 0 -9  0  4 3 2
 * -9 -9 -9  1 2 3
 * 0  0  8  6 6 0
 * 0  0  0 -2 0 0
 * 0  0  1  2 4 0
 *
 * Hourglass:
 *
 * a b c
 *   d
 * e f g
 *
 * The result should be 28 from this part:
 *
 * 0 4 3
 *   1
 * 8 6 6
 *
 * To solve this challenge, we just need to get the values 'manually' by using two FORs and limit the iteration until line 3 (half of the array size).
 *
 * https://www.hackerrank.com/challenges/2d-array/problem
 */

function hourglassSum(arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }

  let highestSum = Number.MIN_SAFE_INTEGER;

  // Iterate between lines and columns (i, j)
  for (let i = 0; i <= arr.length / 2; i++) {
    for (let j = 0; j < arr.length; j++) {
      const a = arr[i][j];
      const b = arr[i][j + 1];
      const c = arr[i][j + 2];
      const d = arr[i + 1][j + 1];
      const e = arr[i + 2][j];
      const f = arr[i + 2][j + 1];
      const g = arr[i + 2][j + 2];

      const sumAll = a + b + c + d + e + f + g;

      if (sumAll > highestSum) {
        highestSum = sumAll;
      }
    };
  }

  return highestSum;
}
