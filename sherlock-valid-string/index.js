/**
 * In this challenge, we should return 'NO' when the string doesn't have the same quantity of characteres as the following rules:
 * 'abc' should return 'YES', we have 1 'A', 1 'B' and 1 'C'.
 * 'abcc' should return 'YES', because even having 2 'C', we are able to remove one element from the string to check if it's valid or not.
 * 'abccdd' should return 'NO', because even if you remove one 'C', we still have two 'D' and not is a valid string.
 *
 * https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
 */

function isValid(s) {
  if (!s) {
    return s;
  }

  const characteres = s.split('');
  const repeatChar = {};

  let invalidCharacterCounter = 0;
  let commonQuantity = 0;
  let validationResult = 'YES';

  // Grouping the quantity each character repeats in the string.
  characteres.forEach((character) => {
    repeatChar[character] = (repeatChar[character] || 0) + 1;
  });

  for (let char in repeatChar) {
    const value = repeatChar[char];

    if (commonQuantity === 0) {
      commonQuantity = value;

      continue;
    }

    // Check the difference between the quantity of characteres.
    if (value !== commonQuantity) {
      invalidCharacterCounter++;
    }
  }

  // If there is more than one difference of quantity in the string, it's not a valid string.
  if (invalidCharacterCounter > 1) {
    validationResult = 'NO';
  }

  return validationResult;
}
