// Last updated: 24/07/2026, 23:51:44
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n == 1 || n == 4) return true;
    if (n < 4 || (n % 4) !== 0) return false
    return isPowerOfFour(Math.floor(n / 4));
};