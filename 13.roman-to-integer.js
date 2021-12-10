/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
  let numerals = new Map();
  numerals.set('I', 1);
  numerals.set('V', 5);
  numerals.set('X', 10);
  numerals.set('L', 50);
  numerals.set('C', 100);
  numerals.set('D', 500);
  numerals.set('M', 1000);

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let prev = numerals.get(s[s.length - 1]);
  num = prev;

  for (let i = s.length - 2; i >= 0; i--) {
    const curr = numerals.get(s[i]);

    if (curr < prev) {
      num -= curr;
    } else {
      num += curr;
    }

    prev = curr;
  }

  return num;
};
// @lc code=end

