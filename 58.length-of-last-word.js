/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let len = 0;
  let isWord = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (!isWord && s[i] !== ' ') {
      isWord = true;
    }

    if (isWord && s[i] === ' ') {
      break;
    }

    if (isWord) {
      len++;
    }
  }

  return len;
};
// @lc code=end
