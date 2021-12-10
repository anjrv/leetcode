/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const lefts = ['(', '[', '{'];
const rights = [')', ']', '}'];

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (rights.includes(s[0])) return false;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if(lefts.includes(curr)) {
      stack.push(curr);
    } else {
      if (stack.length === 0 || lefts.indexOf(stack.pop()) !== rights.indexOf(curr)) return false;
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};
// @lc code=end

