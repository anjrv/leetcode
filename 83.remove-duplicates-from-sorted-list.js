/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let curr = head;

  while (curr) {
    let next = curr.next;

    while (next && curr.val === next.val) {
      next = next.next;
    }

    curr.next = next;
    curr = curr.next;
  }

  return head;
};
// @lc code=end

