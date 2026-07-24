// Last updated: 24/07/2026, 23:52:17
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    for(item of nums){
        if(set.has(item)) return true
        set.add(item)
    }
    return false
};