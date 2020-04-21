/*
  This solution is using FOR and sum variables for better performance. I tried use SLICE/SPLICE
  before, but these kinds of methods with big arrays weren't so performatic (but more readable).

  Link: https://www.hackerrank.com/challenges/sherlock-and-array/problem
*/

const YES = 'YES';
const NO = 'NO';

function balancedSums(arr, arrLength) {
  // If the length is one, total on left and right sides are zero.
  if (arrLength === 1) {
      return YES;
  }

  let sumLeft = 0;
  let sumRight = arr.reduce((total, number) => total + number);

  // Increase left sumatory and decrease right somatory to check the role array.
  for(let i = 0; i < arrLength ; i++){
      sumRight -= arr[i];
      
      if(sumRight === sumLeft){
          return YES;
      }

      sumLeft += arr[i];
  }

  return NO;
}
