// Last updated: 24/07/2026, 23:48:36
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);

    return gcd(max,min)
};