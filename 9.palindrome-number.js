/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if (x.toString(10).split('').reverse().join('') === x.toString(10)) return true;

   return false;
};
// @lc code=end

