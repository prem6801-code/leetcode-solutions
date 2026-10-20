// Last updated: 20/10/2026, 20:59:57
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var targetIndices = function (nums, target) {
7    nums.sort((a, b) => a - b)
8    let ans = []
9    for (let i = 0; i < nums.length; i++) {
10        if (nums[i] == target) {
11            ans.push(i)
12        }
13    }
14    return ans
15};