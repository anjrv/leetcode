/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // Stack iteration example
  let stack = [];
  let res = [];
  let curr = root;

  while(stack.length !== 0 || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let nxt = stack.pop();
      res.push(nxt.val);
      curr = nxt.right;
    }
  }
  
  return res;
};
// @lc code=end

