/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
let memo = new Map();

var helperFunction = function (n) {
  let res = 0;

  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memo.has(n)) return memo.get(n);

  res = helperFunction(n - 1) + helperFunction(n - 2);
  memo.set(n, res);

  return res;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return helperFunction(n);
};
// @lc code=end
