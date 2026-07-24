// Last updated: 24/07/2026, 23:54:09
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = []
    let helper = (i, res) => {
        if (i >= nums.length) {
            result.push([...res]);
            return;
        }
        res.push(nums[i])
        helper(i + 1, res);
        res.pop()
        helper(i + 1, res);
        return
    }
    helper(0, []);
    return result;
};