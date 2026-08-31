// Last updated: 31/08/2026, 23:04:55
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function (nums) {
6    let i = 0, j = 0;
7    while (j < nums.length) {
8        if (nums[i] !== nums[j]) {
9            i++;
10            nums[i] = nums[j]
11        }
12        j++
13    }
14    return i+1;
15};