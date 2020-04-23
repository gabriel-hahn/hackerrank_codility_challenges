/**
 * This solution took about 1.5 hour to get, because I started using REPEAT of strings and
 * the performance wasn't so good, needing to think in a solution w/ better performance for huge strings and repeat times.
 * With this solution, I just validate the repetitions multiplying by quantity of 'a' in the string
 * and add a remainder as explained.
 *
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */

const ONLY_A_REGEX = new RegExp('^a+$');
const A_CHAR_REGEX = new RegExp('a', 'g');

const countACharacter = (s) => s.split('a').length - 1;

// Complete the repeatedString function below.
function repeatedString(s, n) {
  // If exists only A in the string, we just need to return N.
  if (s.match(ONLY_A_REGEX)) {
    return n;
  }

  // If not exists 'A' in the string, return 0.
  if (!s.match(A_CHAR_REGEX)) {
    return 0;
  }

  // Get the repetitions and the remainder (when the length is not divided by N).
  const strLength = s.length;
  const reps = Math.floor(n / strLength);
  const remainder = s.slice(0, n % strLength);

  // Multiply by characters and add reminder if needed.
  return reps * countACharacter(s) + countACharacter(remainder);
}
