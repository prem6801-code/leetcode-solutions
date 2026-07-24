// Last updated: 24/07/2026, 23:47:20
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let ct = 0;
        let res = [];
        for (let j = i; j < nums.length; j++) {
            // res.push(nums[j])
            if (nums[j] == target) ct++;
            if (ct > Math.floor(((j - i) + 1) / 2)) {
                // console.log(res);
                count++;
            }
        }
    }
    return count;
};