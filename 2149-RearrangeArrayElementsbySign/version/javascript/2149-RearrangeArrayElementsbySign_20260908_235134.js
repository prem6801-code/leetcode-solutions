// Last updated: 08/09/2026, 23:51:34
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var rearrangeArray = function (nums) {
6    let ans = new Array(nums.length)
7    let i = 0, j = 1, k = 0;
8    while (k < nums.length) {
9        if (nums[k] < 0) {
10            ans[j] = nums[k]
11            j += 2
12        }
13
14        if (nums[k] >= 0) {
15            ans[i] = nums[k]
16            i += 2
17        }
18        k++
19    }
20    return ans
21};