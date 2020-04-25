/**
 * In this challenge, we got a linked list and need to reverse it (changing the pointers).
 * The result is a linked list which has reverse points and the first element of 'head' with a point to null.
 *
 * https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem
 */

function reverse(head) {
  if (!head || !head.next) {
    return head;
  }

  let node = head;
  let previous = null;

  while (node) {
    const temp = node.next;

    node.next = previous;
    previous = node;
    node = temp;
  }

  return previous;
}
