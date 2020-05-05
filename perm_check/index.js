/**
 * Basically we need to check when an array is permutation or not:
 *
 * [1,2,3,5] is not an permutation (4 is missing)
 * [1,2,3,4,5] is permutation
 * [1,2,2,3,4] is not an permutation - the array can't have repeated numbers
 *
 * https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 */

function solution(arr) {
  if (!arr || arr.length === 0) {
      return 0;
  }

  // As in the permutation array the highest number is equal to the array length
  // we get the highest number in the array to validate it.
  const noRepeatNumbersArr = new Set(arr); // Use SET here to remove repeated numbers in array.
  const highestNumber = Math.max(...arr);

  if (arr.length !== noRepeatNumbersArr.size) {
      return 0;
  }

  return highestNumber === arr.length ? 1 : 0;
}
