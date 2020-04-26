/**
 * In this problem, we just need to rotate the array D times, using POP to remove
 * the last element of array and UNSHIFT it as the first item.
 *
 * https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 */

function solution(A, K) {
  if (!A || A.length === 0) {
    return A;
  }

  const arr = [...A];
  let counter = K;

  while (counter > 0) {
      arr.unshift(arr.pop());
      --counter;
  }

  return arr;
}
