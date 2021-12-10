/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  if (haystack.length < needle.length) return -1;

  let i = 0;
  let j = 0;
  let res;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      res = i;

      while (haystack[i] === needle[j] && j < needle.length) {
        i++;
        j++;
      }

      if (j === needle.length) {
        return res;
      } else {
        j = 0;
        i = res + 1;
      }
    } else {
      i++;
    }
  }

  return -1;
};
// @lc code=end
