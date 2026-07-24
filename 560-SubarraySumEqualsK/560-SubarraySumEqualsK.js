// Last updated: 24/07/2026, 23:51:13
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0
    let currSum = 0
    let map = {}
    map[0] = 1
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        if ((currSum - k) in map) {
            count += map[currSum - k]
        }
        map[currSum] = (map[currSum] || 0) + 1
    }
    return count;
};