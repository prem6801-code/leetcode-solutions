// Last updated: 24/07/2026, 23:47:30
/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
    let res = [];
    for (let [u, v] of queries) {
        let exist = true;
        let low = u >= v ? v : u;
        let high = u <= v ? v : u;
        for (let i = low; i < high; i++) {
            if (Math.abs(nums[i] - nums[i + 1]) > maxDiff) {
                exist = false;
                break;
            }
        }
        res.push(exist)
    }
    return res
};