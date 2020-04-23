/**
 * I just check if the array is only one kind of character, e.g AAA or BBB validating it.
 * As the second validation, I go trought the string removing the repeated characteres and returning
 * the correct length in the end.
 *
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 */

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  const onlyOneKindCharacter = s.match("^(.)\\1*$"); // AAA or BBB

  if (onlyOneKindCharacter) {
    return s.length - 1;
  }

  const finalStr = s.split('').reduce((sumResult, c) => {
    if (sumResult) {
      const lastCharacter = sumResult[sumResult.length - 1];

      return lastCharacter === c ? sumResult : sumResult.concat(c);
    }

    return c;
  });

  return s.length - finalStr.length;
}
