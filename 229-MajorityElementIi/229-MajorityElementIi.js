// Last updated: 24/07/2026, 23:52:12
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let map = new Map();
    let set = new Set();
    let majorityCase = Math.floor(nums.length / 3)
    for (let num of nums) {
        let ct = (map.get(num) || 0) + 1;
        map.set(num, ct)
        if (ct > majorityCase) set.add(num)
    }
    return [...set]
};