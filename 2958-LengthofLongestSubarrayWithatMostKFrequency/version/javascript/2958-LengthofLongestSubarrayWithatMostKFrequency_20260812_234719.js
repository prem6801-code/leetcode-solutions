// Last updated: 12/08/2026, 23:47:19
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
12        if ((nums[j] in map) && map[nums[j]] > k) {
13            maxLength = Math.max(j - i, maxLength)
14            while (map[nums[j]] > k) {
15                map[nums[i]] = map[nums[i]] - 1
16                i++
17            }
18        }
19        j++
20    }
21    maxLength = Math.max(j - i, maxLength)
22    return maxLength;
23};