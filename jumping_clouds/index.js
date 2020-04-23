/**
 * This solutions is bit longer than I expected for this problem, but there are some few validations we should
 * care about, considering the results of next one and two 'clouds' and validate invalids clouds (1).
 *
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */

function jumpingOnClouds(c) {
  let jumpCounter = 0;

  for (let i = 0; i < c.length; i++) {
    const item = c[i];

    // If current item is 1, so is a invalid cloud to count, but we need to check the next one before continue.
    if (item === 1) {
      if (c[i + 1] === 0) {
        ++jumpCounter;
      }

      continue;
    }

    // Check next two clouds and validate how many items we will 'jump'.
    const jumpOnce = c[i + 1] === 0;
    const jumpTwice = c[i + 2] === 0;

    if (jumpOnce && jumpTwice) {
      ++i; // Increase the 'jump' by two on the next loop.
      ++jumpCounter;

      continue;
    }

    if (jumpOnce) {
      ++jumpCounter;
    }
  }

  return jumpCounter;
}
