/**
 * This challenge is basically count how many swaps an array needs to be sorted using the bubble sort method.
 * If the current value is bigger than the next one in the array, they should change the position with each other.
 *
 * Obs: We can use WHILE to sort using bubble sort, but the problem says we need to use the FOR approach.
 *
 * https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
 */

function countSwaps(a) {
  if (!a || a.length === 0) {
    return a;
  }

  const arr = [...a];
  const arrLength = arr.length;

  let swapCounter = 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapCounter++;
      }
    }
  }

  console.log(`Array is sorted in ${swapCounter} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr[arr.length - 1]}`);
}
