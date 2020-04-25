/**
 * This solution validate each character of the binary number, reseting the counter if a number 1 is found and
 * validating if current counter is bigger than the previous one - Avoiding override with a small gap.
 *
 * Description: Find longest sequence of zeros in binary representation of an integer.
 *
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
 * The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
 * The number 20 has binary representation 10100 and contains one binary gap of length 1.
 * The number 15 has binary representation 1111 and has no binary gaps.
 * The number 32 has binary representation 100000 and has no binary gaps.
 *
 * https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 */

function solution(N) {
  const binaryArr = N.toString(2).split('');
  let longestGapCount = 0;
  let longestGap = 0;

  for (let i = 0; i < binaryArr.length; i++) {
      const binaryNumberOne = binaryArr[i] === '1';

      if (binaryNumberOne) {
          if (longestGapCount > longestGap) {
              longestGap = longestGapCount;
          }

          longestGapCount = 0;
      } else {
          longestGapCount++;
      }
  }

  return longestGap;
}
