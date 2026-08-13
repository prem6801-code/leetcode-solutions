// Last updated: 14/08/2026, 00:32:54
1/**
2 * @param {number[]} nums
3 * @param {number} a
4 * @param {number} b
5 * @return {number}
6 */
7var countRatioSubarrays = function (nums, a, b) {
8    let count = 0;
9    let j = 0;
10    while (j < nums.length) {
11        let odd = 0;
12        let even = 0;
13        for (let i = j; i < nums.length; i++) {
14            if (nums[i] % 2 == 0) {
15                even++
16            } else {
17                odd++
18            }
19            if (odd > 0 && even * b <= odd * a) count++;
20        }
21        j++;
22    }
23    return count;
24};