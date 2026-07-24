// Last updated: 24/07/2026, 23:51:34
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let totalSum = 0;
    nums.map((el) => totalSum += el);
    if (totalSum % 2 !== 0) return false
    let dpArr = Array.from({ length: nums.length }, () => new Array((totalSum / 2) + 1))
    let solve = (i, sum) => {
        if (totalSum / 2 == sum) {
            return true;
        }

        if (i == nums.length || sum > totalSum / 2) {
            return false;
        }

        if (dpArr[i][sum] !== undefined) {
            return dpArr[i][sum]
        }
        return dpArr[i][sum] = solve(i + 1, sum + nums[i]) || solve(i + 1, sum);
    }
    return solve(0, 0)
};