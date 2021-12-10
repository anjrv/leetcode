/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let done = false;

  for (let i = digits.length - 1; i >= 0 && !done; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      done = true;
    } else {
      digits[i] = 0;
    }
  }

  if (!done) {
    digits.unshift(1);
  }

  return digits;
};
// @lc code=end
