/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;

  let res = '';
  let aRev = a.split('').reverse().join('');
  let bRev = b.split('').reverse().join('');

  for (let i = 0; i < Math.max(aRev.length, bRev.length); i++) {
    const curr =
      parseInt(i < aRev.length ? aRev[i] : 0, 10) +
      parseInt(i < bRev.length ? bRev[i] : 0, 10);

    switch (curr) {
      case 0:
        res += carry > 0 ? '1' : '0';
        if (carry) carry--;
        break;
      case 1:
        res += carry ? '0' : '1';
        break;
      case 2:
        res += carry ? '1' : '0';
        if (!carry) carry++;
        break;
    }
  }

  if (carry) {
    res += '1';
  }

  return res.split('').reverse().join('');
};
// @lc code=end
