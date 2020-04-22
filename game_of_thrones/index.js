/**
 * This problem is about identify a palindrome (e.g aba, ttaacaatt) in the S parameter, but 
 * the order of characteres might not respect the correct order of a palindrome, so I needed to identify
 * when a string 'might' be a palindrome, depending of the characteres and not of the order.
 * I just sum how many types the same character appears in the string and validate the odd numbers.
 * 
 * https://www.hackerrank.com/challenges/game-of-thrones/problem
 */

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
  let resultObj = {};
  let oddCount = 0;

  // Count each character inside parameter
  s.split('').forEach(c => {
    if (resultObj[c]) {
      resultObj[c]++;
    }
    else resultObj[c] = 1;
  });

  // Verify the quantity of odd numbers
  for (let c in resultObj) {
    if (resultObj[c] % 2 != 0) {
      oddCount++;
    }
  }
  
  return oddCount > 1 ? 'NO' : 'YES';
}
