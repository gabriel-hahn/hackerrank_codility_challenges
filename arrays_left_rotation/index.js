/**
 * In this problem, we just need to rotate the array D times, using SHIFT to remove
 * the first element of array and PUSH it as the last item.
 * 
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
 */

// Complete the rotLeft function below.
function rotLeft(a, d) {
  const arr = [...a];

  while (d > 0) {
    arr.push(arr.shift());
    --d;
  }

  return arr;
}
