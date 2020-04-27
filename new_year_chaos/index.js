/**
 * This solution is about validate the current index and check how many steps it will take to go back to the correct
 * position, without repeat the counter in two numbers which changed their position with each other.
 *
 * https://www.hackerrank.com/challenges/new-year-chaos/problem
 */

function minimumBribes(queue) {
  if (!queue) {
      return queue;
  }

  let bribes = 0;

  for (let i = 0; i < queue.length; i++) {
    const at = i + 1;
    const number = queue[i];

    // If the difference between the number and the current position is > 2,
    // should return 'Too chaotic' because it's not possible to calculate.
    if (number - at > 2) {
      bribes = 'Too chaotic';
      break;
    }

    // Here we validate how many numbers bigger than the current one are between
    // the current index and the correct one (max 2 = number - 2).
    for (let j = Math.max(0, number - 2); j < i; j++) {
      if (queue[j] > number) {
        bribes++;
      }
    }
  }

  console.log(bribes);
}
