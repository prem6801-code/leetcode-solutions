// Last updated: 24/07/2026, 23:51:47
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n==1 || n == 3) return true;
  if (n < 3 || (n % 3) !== 0) return false
  return isPowerOfThree(Math.floor(n / 3));
};