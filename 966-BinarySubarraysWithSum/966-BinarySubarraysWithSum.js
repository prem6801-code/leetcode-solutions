// Last updated: 24/07/2026, 23:50:05
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let helper = (nums,goal) => {
        let count = 0;
        let sum = 0;
        let j = 0;
        let i = 0
        while (j < nums.length) {
            if (goal < 0) return 0
            sum += nums[j]
            while (sum > goal) {
                sum -= nums[i]
                i++;
            }
            count += j - i + 1;
            j++;
        }
        return count
    }

    return helper(nums, goal) - helper(nums, goal-1)
};