// Last updated: 24/07/2026, 23:49:15
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i]
        let count = 0
        while (temp > 0) {
            digit = temp % 10;
            count++;
            temp = Math.floor(temp / 10);
        }
        if (count % 2 == 0) res++
    }
    return res
};