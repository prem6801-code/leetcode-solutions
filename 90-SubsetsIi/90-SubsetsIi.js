// Last updated: 24/07/2026, 23:53:53
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let set = new Set();
    let helper = (i, res) => {
        if (i >= nums.length) {
            let key = res.join(",")
            if (!set.has(key)) {
                result.push([...res]);
                set.add(key)
            }
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