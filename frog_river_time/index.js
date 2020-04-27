/**
 * We need to check when the frog can cross the river by validating how much leaves it needs.
 * For example, in the array [1,2,4,4,4,5,2,3,2,2] and X = 5, we need to return 7, because only on 7 position
 * we got all 5 (X) numbers we need (1,2,3,4,5).
 * For this solution I used Map, setting an element when it doesn't exists on our Map.
 *
 * https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 */

function solution(X, A) {
  if (!A) {
    return -1;
  }

  let timeToJump = -1;
  let numbersSet = new Map();

  for (let i = 0; i < A.length; i++) {
    const currentNumber = A[i];

    if (!numbersSet.has(currentNumber)) {
      numbersSet.set(currentNumber);

      if (numbersSet.size === X) {
        timeToJump = i;

        break;
      }
    }
  }

  return timeToJump;
}
