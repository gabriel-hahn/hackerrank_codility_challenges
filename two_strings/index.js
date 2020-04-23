/**
 * This challenge is about identify when one or more characteres exists in the other string.
 * For example, 'tea' and 'mouse' shares the same charactere 'e', but 'fork' and 'cat' don't have any
 * characteres in common.
 *
 * https://www.hackerrank.com/challenges/two-strings/problem
 */

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  return s1.split('').find(c => s2.includes(c)) ? 'YES' : 'NO';
}
