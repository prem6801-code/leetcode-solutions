// Last updated: 24/07/2026, 23:52:10
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 1 || n == 2) return true;
    if (n < 2 || (n % 2) !== 0) return false
    return isPowerOfTwo(Math.floor(n / 2));
};