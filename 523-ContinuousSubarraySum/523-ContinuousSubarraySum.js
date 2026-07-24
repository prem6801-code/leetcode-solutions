// Last updated: 24/07/2026, 23:51:18
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let map =  new Map();
    map.set(0, -1)
    let j = 0, cur_sum = 0;

    while (j < nums.length) {
        cur_sum += nums[j];
        if (map.has(cur_sum % k)) {
            if (j - map.get(cur_sum % k) >= 2) return true;
        } else {
            map.set(cur_sum % k, j)
        }
        j++
    }
    return false
};