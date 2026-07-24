// Last updated: 24/07/2026, 23:49:26
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    nums.forEach((item, idx) => {
        item % 2 == 0 ? nums[idx] = 0 : nums[idx] = 1
    })
    let helper = (nums, k) => {
        let count = 0;
        let sum = 0;
        let j = 0;
        let i = 0
        while (j < nums.length) {
            if (k < 0) return 0
            sum += nums[j]
            while (sum > k) {
                sum -= nums[i]
                i++;
            }
            count += j - i + 1;
            j++;
        }
        return count
    }

    return helper(nums, k) - helper(nums, k - 1)
};