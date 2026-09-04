// Last updated: 04/09/2026, 23:29:33
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var firstStableIndex = function (nums, k) {
7    let max = new Array(nums.length)
8    let min = new Array(nums.length)
9    let maxEl = nums[0]
10    let minEl = nums[nums.length - 1]
11    let i = 0, j = nums.length - 1;
12    while (i < nums.length) {
13        if (nums[i] > maxEl) {
14            maxEl = nums[i]
15        }
16        if (nums[j] < minEl) {
17            minEl = nums[j]
18        }
19        max[i] = maxEl
20        min[j] = minEl
21        i++
22        j--
23    }
24    // console.log(min, max)
25    let res = 0
26    for (let i = 0; i < nums.length; i++) {
27        // console.log(max[i], min[(nums.length - 1) - i])
28        if ((max[i] - min[i]) <= k) return i
29    }
30    return -1
31};