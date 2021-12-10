/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 1) return 0;

  let i = 2;
  while (i * i <= x) {
    i++;
  }

  return --i;
};
// @lc code=end
