// Last updated: 19/08/2026, 00:54:59
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var largestInteger = function (nums, k) {
7    let map = {};
8    for (let num of nums) {
9        map[num] = (map[num] || 0) + 1
10    }
11    let max = -1;
12    if (k == 1) {
13        for (let [key, value] of Object.entries(map)) {
14            if (value == 1) {
15                max = Math.max(max, Number(key))
16            }
17        }
18    } else if (k == nums.length) {
19        for (let [key, value] of Object.entries(map)) {
20            max = Math.max(max, Number(key))
21        }
22    } else {
23        if (map[nums[0]] == 1) {
24            max = Math.max(max, nums[0])
25        }
26        if (map[nums[nums.length - 1]] == 1) {
27            max = Math.max(max, nums[nums.length - 1])
28        }
29    }
30    return max;
31};