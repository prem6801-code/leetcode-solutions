// Last updated: 24/07/2026, 23:48:14
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let hm = {}
    for (let i = 0; i < nums.length; i++) {
        hm[nums[i]] = (hm[nums[i]] || 0) + 1
    }
    let keys = Object.keys(hm)
    for (let i = 0; i < keys.length; i++) {
        if (hm[keys[i]] % 2 !== 0) return false
    }
    return true;
};