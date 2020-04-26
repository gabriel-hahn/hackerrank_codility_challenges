/**
 * The best algorithm for performance is to divide and decrease the numbers as follows.
 * My first thought was to use the WHILE loop and validate when the current position is greater than Y, but in
 * big distances with small jumps (D) it will take forever, even it's easier to understand: x
 *
 * https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 */

function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
