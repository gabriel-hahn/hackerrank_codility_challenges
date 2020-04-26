/**
 *
 * Iterate in array A and sum all items by '.filter(n => n === number)' which number is the current number of
 * iteration and return it if '.length % 2 !== 0'. This would be the quickly solution and the easiest to understand,
 * but is very slow in huge arrays as 1.000.000.000 items. In these cases, I used the following solution, creating
 * an object to sum how many times an item appears in the array and check it later with forIn. With this approach, I just
 * iterate in the array maximum twice, and the second forIn has the half of the size of the first one, as is a sum of repeated
 * numbers. With the short solution using .filter, we will iterate in the array basically all the time for each item.
 *
 * https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 */

function solution(A) {
  if (!A || A.length === 0) {
    return A;
  }

  let numbersObj = {};
  let oddNumber = 0;

  for (let i = 0; i < A.length; i++) {
    const number = A[i];

    if (!numbersObj[number]) {
      numbersObj[number] = 1;

      continue;
    }

    ++numbersObj[number];
  }

  for (let number in numbersObj) {
    const isOdd = numbersObj[number] % 2 !== 0;

    if (isOdd) {
      oddNumber = +number;

      break;
    }
  }

  return oddNumber;
}
