// Last updated: 12/08/2026, 23:52:27
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var maxSubarrayLength = function (nums, k) {
7    let map = {};
8    let j = 0, i = 0;
9    let maxLength = 0;
10    while (j < nums.length) {
11        map[nums[j]] = (map[nums[j]] || 0) + 1
12        maxLength = Math.max(j - i, maxLength)
13        while (map[nums[j]] > k) {
14            map[nums[i]] = map[nums[i]] - 1
15            i++
16        }
17        j++
18    }
19    maxLength = Math.max(j - i, maxLength)
20    return maxLength;
21};